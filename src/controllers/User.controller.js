const UserController = {};

const User = require("../models/User");

UserController.renderRegisterForm = (req, res) => {
  res.render("users/register", { layout: "login" });
};

UserController.register = (req, res) => {
  const errors = [];

  const { name, email, password, confirm_password } = req.body;
  console.log(req.body);
};

UserController.renderLoginForm = (req, res) => {
  res.render("users/login", { layout: "login" });
};

module.exports = UserController;
