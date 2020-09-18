const { Router } = require("express");
const router = Router();

const {
  renderListCategorias,
  renderFormAddCategorias,
  createCategoria,
  renderFormEditCategoria,
} = require("../controllers/CategoriasController");

const { isAuthenticated } = require("../helpers/authenticate");

//render lista de categorias no adm
router.get("/list-categorias", isAuthenticated, renderListCategorias);
//render formulário add categorias
router.get("/add-categorias", isAuthenticated, renderFormAddCategorias);
//rota para criar a categoria
router.post("/create-categoria", isAuthenticated, createCategoria);

router.get("/edit-categoria/:id", isAuthenticated, renderFormEditCategoria);

module.exports = router;
