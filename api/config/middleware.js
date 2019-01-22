const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");

const sessionConfig = require("./sessionConfig");

module.exports = server => {
  server.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
  }));
  server.use(session(sessionConfig));
  server.use(bodyParser.json());
  server.use(morgan("short"));
  server.use(helmet());
};
