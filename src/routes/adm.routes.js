const { Router } = require("express");
const router = Router();

const {
  renderListUsers,
  renderRegisterForm,
  listPages,
  registerUsers,
} = require("../controllers/AdmController");

const { isAuthenticated } = require("../helpers/isAuthenticated");

//renderiza a dashboard
router.get("/adm/dashboard", isAuthenticated, (req, res) => {
  res.render("adm/dashboard", { layout: "adm" });
});
//renderiza lista de usuários cadastrados no adm
router.get("/users/list-users", isAuthenticated, renderListUsers);
//renderiza formulário de cadastro de usuário
router.get("/users/register", isAuthenticated, renderRegisterForm);
//rota de cadastro de usuário
router.post("/users/register", isAuthenticated, registerUsers);



router.get("/adm/list-pages", isAuthenticated, listPages);

module.exports = router;
