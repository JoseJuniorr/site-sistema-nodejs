const { Router } = require("express");
const router = Router();

const {
  renderListCategorias,
  renderFormAddCategorias,
  createCategoria,
  renderFormEditCategoria,
  updateCategoria,
} = require("../controllers/CategoriasController");

const { isAuthenticated } = require("../helpers/isAuthenticated");

//render lista de categorias no adm
router.get("/list-categorias", isAuthenticated, renderListCategorias);
//render formulário add categorias
router.get("/add-categorias", isAuthenticated, renderFormAddCategorias);
//rota para criar a categoria
router.post("/create-categoria", isAuthenticated, createCategoria);

router.get("/edit-categoria/:id", isAuthenticated, renderFormEditCategoria);

router.put("/update-categoria/:id", isAuthenticated, updateCategoria);

module.exports = router;
