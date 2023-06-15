const { Router } = require("express");

const router = Router();

router.get("/create", (req, res) => {
  res.send("creating an order");
});

router.get("/cancel", (req, res) => {
  res.send("canceling order");
});

router.get("/capture", (req, res) => {
  res.send("capturing order");
});

module.exports = router;
