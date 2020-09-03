const { Router } = require("express");
const router = Router();

router.get("/posts", (req, res) => {
  res.send("posts route");
});

module.exports = router;
