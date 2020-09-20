const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("home/home");
});

router.get("/edit-home", (req, res) => {
  res.render("home/edit-home", { layout: "adm" });
});

module.exports = router;
