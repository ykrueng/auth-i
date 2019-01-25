const express = require("express");

const userRoute = require("./user/userRoute");

router = express.Router();

// dummy routes: TO BE REMOVED to respected routes
router.get("/something", (req, res) => {
  res.status(200).send("Allowed to access something.");
});
router.get("/other", (req, res) => {
  res.status(200).send("Allowed to access other.");
});
router.get("/a", (req, res) => {
  res.status(200).send("Allowed to access a.");
});

// nested route
router.use("/user", userRoute);

module.exports = router;
