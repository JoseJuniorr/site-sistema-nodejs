const { Router } = require("express");
const router = Router();

const multer = require("multer");
const upload = multer;

const {
  renderFormCarousel,
  listCarouselHome,
  renderNewCarousel,
} = require("../controllers/CarouselHomeController");

const { isAuthenticated } = require("../helpers/isAuthenticated");

router.get("/edit-carouselHome", isAuthenticated, renderFormCarousel);

router.get("/list-carouselHome", isAuthenticated, listCarouselHome);

router.get("/new-carousel-home", isAuthenticated, renderNewCarousel);

router.post("/create-carouselHome", (req, res) => {
  res.send("rota post para salvar banner no bd");
});

module.exports = router;
