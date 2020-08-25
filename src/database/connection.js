const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@site-sistema-nodejs.xmc0i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Conexão com o MongoDB Cloud realizada com sucesso!");
  })
  .catch((err) => {
    console.log("Erro ao conectar ao MongoDB" + err);
  });

module.exports = connection;
