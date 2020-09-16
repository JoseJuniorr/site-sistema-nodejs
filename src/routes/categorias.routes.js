const { Router } = require("express");
const router = Router();

const { isAuthenticated } = require("../helpers/authenticate");

router.get("/list-categorias", isAuthenticated, (req, res) => {
  res.render("categorias/list-categorias", { layout: "adm" });
});

router.get("/add-categorias", isAuthenticated, (req, res) => {
  res.render("categorias/add-categorias", { layout: "adm" });
});

module.exports = router;
