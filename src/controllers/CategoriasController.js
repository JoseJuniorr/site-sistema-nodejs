const CategoriasController = {};

const Categoria = require("../models/Categoria");

//renderiza tela de lista de categorias no adm
CategoriasController.renderListCategorias = async (req, res) => {
  const categorias = await Categoria.find({}).sort({
    updatedAt: "desc",
  });

  res.render("categorias/list-categorias", {
    layout: "adm",
    categorias: categorias,
  });
};

//renderiza formulário de cadastro de categorias do site
CategoriasController.renderFormAddCategorias = (req, res) => {
  res.render("categorias/add-categorias", { layout: "adm" });
};

CategoriasController.createCategoria = async (req, res) => {
  const { title } = req.body;

  await new Categoria({
    title: title,
  })
    .save()
    .then(() => {
      req.flash("success_msg", "Categoria cadastrada com sucesso!");
      res.redirect("/categorias/list-categorias");
    })
    .catch((err) => {
      req.flash("error_msg", "Erro cadastrar a categoria !");
      res.redirect("/categorias/list-categorias");
    });
};

CategoriasController.renderFormEditCategoria = async (req, res) => {
  const categorias = await Categoria.findById(req.params.id);

  res.render("categorias/edit-categoria", {
    layout: "adm",
    categorias: categorias,
  });
};

module.exports = CategoriasController;
