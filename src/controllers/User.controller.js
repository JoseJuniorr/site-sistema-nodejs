const UserController = {};

const User = require("../models/User");

UserController.renderRegisterForm = (req, res) => {
  res.send("formulário de registro");
};

UserController.renderLoginForm = (req, res) => {
  res.send("formulario de login");
};

module.exports = UserController;
