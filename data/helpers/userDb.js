const db = require("../config/dbConfig");

module.exports = {
  register: function(user) {
    return db("users").insert(user);
  },

  getUser: function (username) {
    return db("users").where("username", username);
  }
};
