const bcrypt = require("bcrypt");
require("dotenv").config();
const correctPw = process.env.ADMIN_PASSWORD_HASH;

const admin = (req, res, next) => {
  const match = bcrypt.compare(req.body.password, correctPw);
  if (match) {
    req.session.username = "admin";
    next();
  } else {
    res.status(400).json({ message: "Failed to login" });
  }
};

const isLoggedIn = (req, res, next) => {
  if (req.session.username) {
    next();
  } else {
    res.status(400).json({ message: "Permission denied" });
  }
};

module.exports = { isLoggedIn, admin };
