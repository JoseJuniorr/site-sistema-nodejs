const { Router } = require("express");
const router = Router();

const { isAuthenticated } = require("../helpers/authenticate");

router.get("/adm/dashboard", isAuthenticated, (req, res) => {
  res.render("adm/dashboard", { layout: "adm" });
});

module.exports = router;
