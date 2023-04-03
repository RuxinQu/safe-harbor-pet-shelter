const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
require("dotenv").config();
const correctPW = process.env.ADMIN_PASSWORD_HASH;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      if (username !== "admin") {
        return done(null, false, {
          message: "can not find username",
        });
      }
      const matchPassword = await bcrypt.compare(password, correctPW);
      return matchPassword
        ? done(null, { id: 123 })
        : done(null, false, { message: "Incorrect password" });
    } catch (err) {
      done(err);
    }
  })
);

// configure Passport session serialization
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  done(null, { id: id });
});
