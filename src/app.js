const express = require("express");
const handlebars = require("express-handlebars");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");

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
//variaveis globais
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});
//BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//passport
app.use(passport.initialize());
app.use(passport.session());

//Rotas
// app.use(require("./routes/add_bd.routes"));
app.use(require("./routes/home.routes"));
app.use(require("./routes/sobre.routes"));
app.use(require("./routes/posts.routes"));

app.use(require("./routes/users.routes"));
app.use(require("./routes/adm.routes"));

module.exports = app;
