module.exports = (err, req, res, next) => {
  console.log(err);
  switch (err) {
    case 401:
      res.status(err).send("You shall not pass!");
      break;
    default:
      res.status(500).json("Failed to fetch users.");
      break;
  }
};
