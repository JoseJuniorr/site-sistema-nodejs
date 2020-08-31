const { Router } = require("express");
const router = Router();

const {
  renderLoginForm,
  login,
  logout,
} = require("../controllers/User.controller");

const { isAutheticated } = require("../helpers/authenticate");

// router.get("/users/register", renderRegisterForm);

// router.post("/users/register", register);

router.get("/users/login", renderLoginForm);

router.post("/users/login", login);

router.get("/users/logout", logout);

module.exports = router;
