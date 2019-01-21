const express = require("express");
const bcrypt = require("bcryptjs");

const configMdlware = require("./config/middleware");
const db = require("../data/helpers/userDb");

const server = express();
configMdlware(server);

server.get("/", (req, res) => {
  res.send("Welcome to Auth-i Project");
});

server.post("/register", async (req, res) => {
  const user = req.body;

  if (!user || !user.username || !user.password) {
    res.status(400).send("Invalid username or password.");
  }

  user.password = bcrypt.hashSync(user.password, 10);

  try {
    const userId = await db.register(user);
    if (userId.length) {
      res.status(201).json({ id: userId[0] });
    } else {
      res.status(500).send("Failed to register.");
    }
  } catch {
    res.status(500).send("Failed to register.");
  }
});

module.exports = server;
