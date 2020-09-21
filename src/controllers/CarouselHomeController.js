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
CarouselHome.createBannerCarousel = async (req, res) => {
  
  const { title, link } = req.body;

  const newBanner = new CarouselModel({
    title: title,
    link: link,
   
  });

  await newBanner
    .save()
    .then(() => {
      req.flash("success_msg", "Banner cadastrado com sucesso!");
      res.redirect("/banner/list-carouselHome");
    })
    .catch((err) => {
      req.flash("error_msg", "Erro ao salvar o banner!");
    });
};

module.exports = CarouselHome;
