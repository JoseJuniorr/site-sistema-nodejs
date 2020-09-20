const CarouselHome = {};

const CarouselModel = require("../models/CarouselHome");

const cloudinary = require("../config/cloudinary.config");

//renderiza form para cadastro de imagens na home
CarouselHome.renderFormCarousel = (req, res) => {
  res.render("home/edit-carouselHome", { layout: "adm" });
};

CarouselHome.createBannerCarousel = (req, res) => {};

CarouselHome.listCarouselHome = (req, res) => {
  res.render("home/list-carouselHome", { layout: "adm" });
};

module.exports = CarouselHome;
