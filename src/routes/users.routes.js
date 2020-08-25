const { Router } = require("express");
const router = Router();

const {
  renderRegisterForm,
  renderLoginForm,
  register,
} = require("../controllers/User.controller");

router.get("/users/register", renderRegisterForm);

router.post("/users/register", register);

router.get("/users/login", renderLoginForm);

module.exports = router;
