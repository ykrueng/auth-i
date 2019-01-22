const express = require("express");

const configMdlware = require("./config/middleware");

const registerRoute = require("./register/registerRoute");
const loginRoute = require("./login/loginRoute");
const logoutRoute = require("./logout/logoutRoute");
const usersRoute = require("./users/usersRoute");
const authenticate = require("./session/authenticate");
const restrictedRoutes = require("./restricted/restrictedRoutes");

const server = express();
configMdlware(server);

server.get("/", (req, res) => {
  res.send("Welcome to Auth-i Project");
});

server.use("/api/register", registerRoute);
server.use("/api/login", loginRoute);
server.use("/api/logout", logoutRoute);
server.use("/api/users", usersRoute);

server.use("/api/restricted", authenticate, restrictedRoutes);

module.exports = server;
