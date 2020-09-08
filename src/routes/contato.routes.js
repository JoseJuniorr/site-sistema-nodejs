const { Router } = require("express");
const router = Router();

router.get("/contato", (req, res) => {
  res.render("contato/contato");
});

module.exports = router;
