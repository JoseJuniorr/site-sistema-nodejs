const express = require("express");
const handlebars = require("express-handlebars");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const favicon = require("serve-favicon");
const morgan = require("morgan");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");

const moment = require("moment");

require("dotenv").config();

//passport config
require("./config/auth");

//Inicialização
const app = express();

//Database
require("./database/connection");

//Configurações
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

//view engine
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: {
      formatDate: function (dateString) {
        moment.locale("pt-br");
        return moment(dateString).format("LLL");
      },
    },
  })
);
app.set("view engine", "handlebars");

//Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//morgan
app.use(morgan("dev"));
//Express Session
app.use(
  session({
    secret: "secret_session",
    resave: true,
    saveUninitialized: true,
  })
);
//flash messages
app.use(flash());

//Middlewares
app.use(favicon(path.join(__dirname, "public", "/images/favicon/favicon.ico")));
app.use(methodOverride("_method"));
//BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//passport
app.use(passport.initialize());
app.use(passport.session());

//variaveis globais
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;

  next();
});

//Rotas
// app.use(require("./routes/add_bd.routes"));
app.use(require("./routes/home.routes"));
app.use(require("./routes/carouselHome.routes"));

app.use(require("./routes/sobre.routes"));
app.use(require("./routes/contato.routes"));

app.use("/posts", require("./routes/posts.routes"));
app.use("/categorias", require("./routes/categorias.routes"));

app.use(require("./routes/users.routes"));
app.use(require("./routes/adm.routes"));
app.use(require("./routes/error.routes"));

module.exports = app;
