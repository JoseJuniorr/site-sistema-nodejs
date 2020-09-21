const CarouselHome = {};

const CarouselModel = require("../models/CarouselHome");

const cloudinary = require("../config/cloudinary.config");

//renderiza form para edição
CarouselHome.renderFormCarousel = (req, res) => {
  res.render("home/edit-carouselHome", { layout: "adm" });
};

//lista os itens cadastrados
CarouselHome.listCarouselHome = (req, res) => {
  res.render("home/list-carouselHome", { layout: "adm" });
};

//renderiza form para cadastro
CarouselHome.renderNewCarousel = (req, res) => {
  res.render("home/new-carousel-home", { layout: "adm" });
};

//salvar as informações do banner no banco e cloudinary
CarouselHome.createBannerCarousel = (req, res) => {};

module.exports = CarouselHome;
