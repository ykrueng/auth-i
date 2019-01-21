const express = require("express");

const db = require("../../../data/helpers/userDb");
// const error = require("./usersError");

const router = express.Router();

router.get("/", async (req, res) => {
  const { userId } = req.session;
  try {
    const user = await db.getUserById(userId);
    if (user.length) {
      res.status(200).json(user[0]);
    } else {
      res.status(500).jsoan({ error: "Failed to fetch user info."})
    }
  } catch (err) {
    res.status(500).jsoan({ error: "Failed to fetch user info."})
  }
});

// router.use(error);

module.exports = router;
