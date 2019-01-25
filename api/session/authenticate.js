module.exports = (req, res, next) => {
  const { userId } = req.session;

  if (!userId) {
    res.status(401).send("You shall not pass!");
  } else {
    next();
  }
};
