const { Router } = require("express");
const router = Router();

const multer = require("multer");
const upload = multer;

const {
  renderFormCarousel,
  listCarouselHome,
} = require("../controllers/CarouselHomeController");

const { isAuthenticated } = require("../helpers/isAuthenticated");

router.get("/edit-carouselHome", isAuthenticated, renderFormCarousel);

router.get("/list-carouselHome", isAuthenticated, listCarouselHome);

router.post("/create-carouselHome", (req, res) => {
  res.send("rota para salvar banner no bd");
});

module.exports = router;
