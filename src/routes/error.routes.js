const { Router } = require("express");
const router = Router();

router.get("*", (req, res) => {
  res.render("error/not-found", {
    title: "Sorry, page not found",
    layout: "error",
  });
});

module.exports = router;
