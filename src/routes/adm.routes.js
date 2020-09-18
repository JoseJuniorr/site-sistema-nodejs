const { Router } = require("express");
const router = Router();

const { renderListUsers } = require("../controllers/AdmController");

const { isAuthenticated } = require("../helpers/authenticate");

router.get("/adm/dashboard", isAuthenticated, (req, res) => {
  res.render("adm/dashboard", { layout: "adm" });
});

router.get("/users/list-users", isAuthenticated, renderListUsers);

module.exports = router;
