const db = require("../config/dbConfig");

module.exports = {
  register: function(user) {
    return db("users").insert(user);
  },

  getUserByName: function (username) {
    return db("users").where("username", username);
  },

  getUserById: function(userId) {
    return db("users").where("id", userId);
  }
};
