const { Router } = require("express");
const router = Router();

const {
  renderRegisterForm,
  register,
  renderLoginForm,
  login,
  logout,
} = require("../controllers/User.controller");

router.get("/users/register", renderRegisterForm);

router.post("/users/register", register);

router.get("/users/login", renderLoginForm);

router.post("/users/login", login);

router.get("/users/logout", logout);

module.exports = router;
