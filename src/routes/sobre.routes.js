const { Router } = require("express");
const router = Router();

router.get("/sobre", (req, res) => {
  res.render("sobre/sobre");
});

module.exports = router;
