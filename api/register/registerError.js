module.exports = (err, req, res, next) => {
  switch (err) {
    case 400:
      res.status(err).json({
        error: "Invalid username or password"
      });
      break;
    case 19:
      res.status(400).json({
        error: "Username is already taken."
      });
      break;
    default:
      res.status(500).json({
        error: "Failed to register a new user."
      });
      break;
  }
};
