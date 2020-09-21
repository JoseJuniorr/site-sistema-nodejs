const { Router } = require("express");
const router = Router();

router.get("/ensino", (req, res) => {
  res.render("ensinoPage/ensinoPage");
});

module.exports = router;
