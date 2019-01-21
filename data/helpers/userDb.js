const db = require('../config/dbConfig');

module.exports = {
  register: function (user) {
    return db("users").insert(user);
  }
}