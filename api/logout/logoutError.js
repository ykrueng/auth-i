module.exports = (err, req, res, next) => {
  switch (err) {
    case 400:
      res.status(err).json({
        error: "Invalid request."
      });
      break;
    default:
      res.status(500).json({
        error: "Failed to logout."
      });
      break;
  }
};
