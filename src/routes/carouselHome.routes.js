const { Router } = require("express");
const router = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/carousel-home" });

const {
  renderFormCarousel,
  listCarouselHome,
  renderNewCarousel,
  createBannerCarousel,
} = require("../controllers/CarouselHomeController");

const { isAuthenticated } = require("../helpers/isAuthenticated");

router.get("/edit-carouselHome", isAuthenticated, renderFormCarousel);

router.get("/list-carouselHome", isAuthenticated, listCarouselHome);

router.get("/new-carousel-home", isAuthenticated, renderNewCarousel);

router.post(
  "/create-carouselHome",
  isAuthenticated,
  upload.single("image"),
  createBannerCarousel
);

module.exports = router;
