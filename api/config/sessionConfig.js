module.exports = {
  name: "auth-i", // default is connect.sid
  secret: "nobody tosses a dwarf!",
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in milliseconds
    secure: false // only set cookies over https. Server will not send back a cookie over http.
  },
  httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
  resave: false,
  saveUninitialized: true
};
