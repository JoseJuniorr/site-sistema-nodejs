const { Router } = require("express");
const router = Router();

router.get("/contato", (req, res) => {
  res.send("rota contato");
});

module.exports = router;
