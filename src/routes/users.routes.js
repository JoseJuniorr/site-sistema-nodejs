const { Router } = require("express");
const router = Router();

const {
  renderLoginForm,
  login,
  logout,
  resetPassword,
} = require("../controllers/UserController");

// router.get("/users/register", renderRegisterForm);

// router.post("/users/register", register);

router.get("/users/login", renderLoginForm);

router.post("/users/login", login);

router.get("/users/logout", logout);

//renderiza pagina de recuperação de senha
router.get("/forgot", (req, res) => {
  res.render("users/forgot", { layout: "login" });
});

module.exports = router;
