const express = require("express");
const handlebars = require("express-handlebars");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyParser = require("body-parser");
const path = require("path");

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

//Rotas
app.use(require("./routes/home.routes"));

module.exports = app;
