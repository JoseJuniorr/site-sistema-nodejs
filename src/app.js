const express = require("express");
const handlebars = require("express-handlebars");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

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

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret_session",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

//Rotas
app.use(require("./routes/home.routes"));
app.use(require("./routes/users.routes"));

//variaveis globais
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

module.exports = app;
