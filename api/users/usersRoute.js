const express = require("express");

const db = require("../../data/helpers/userDb");
const error = require("./usersError");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const { userId } = req.session;

  if (!userId) {
    next(401);
  } else {
    try {
      const users = await db.getUsers();
      res.status(200).json(users);
    } catch (err) {
      next(500);
    }
  }
});

router.use(error);

module.exports = router;
