const { Router } = require("express");
const router = Router();

const { isAuthenticated } = require("../helpers/authenticate");

router.get("/sobre", (req, res) => {
  res.render("sobre/sobre");
});

router.get("/edit-sobre", isAuthenticated, (req, res) => {
  res.render("sobre/edit-sobre", { layout: "adm" });
});

module.exports = router;
