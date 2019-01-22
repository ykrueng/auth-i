const express = require("express");

const error = require("./logoutError");

const router = express.Router();

router.get('/', (req, res, next) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        next(500);
      } else {
        res.send('good bye');
      }
    });
  }
});

module.exports = router;