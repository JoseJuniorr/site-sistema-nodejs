const UserController = {};

const User = require("../models/User");
const passport = require("passport");

UserController.renderRegisterForm = (req, res) => {
  res.render("users/register", { layout: "login" });
};

UserController.register = (req, res) => {
  const errors = [];

  const { name, email, password, confirm_password } = req.body;
};

UserController.renderLoginForm = (req, res) => {
  res.render("users/login", { layout: "login" });
};

UserController.login = passport.authenticate("local", {
  failureRedirect: "/users/login",
  successRedirect: "/adm",
  failureFlash: true,
});

UserController.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "Usuário deslogado com sucesso!");
  res.redirect("/");
};

module.exports = UserController;
