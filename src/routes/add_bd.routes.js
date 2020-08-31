const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

const User = require("../models/User");

router.get("/add_bd", (req, res) => {
  var password = "123654";

  bcrypt.genSalt(10, (erro, salt) => {
    bcrypt.hash(password, salt, (erro, hash) => {
      if (erro) {
        res.send("Erro ao criptografar a senha!");
      } else {
        var senha_cript = hash;
        new User({
          name: "José Junior 2",
          email: "jjerrorama@gmail.com",
          password: senha_cript,
        })
          .save()
          .then(() => {
            console.log("Usuário cadastrado com sucesso!");
            res.send("Usuário cadastrado com sucesso!");
          })
          .catch((err) => {
            console.log("Erro ao salvar!");
            res.send("Erro ao salvar!");
          });
      }
    });
  });
});

module.exports = router;
