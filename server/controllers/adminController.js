const router = require("express").Router();
const upload = require("../util/imageHelper");
const passport = require("passport");
const rateLimit = require("express-rate-limit");
const isLoggedIn = require("../util/auth");
const { Pet } = require("../models");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // 3 requests per windows
  message: "Too many requests, please try again later",
});

router.post(
  "/add-pets",
  isLoggedIn,
  upload.array("images", 10),
  async (req, res) => {
    try {
      const files = req.files;
      // Create an array of the uploaded file URLs
      const images = files.map((file) => {
        return { url: file.location };
      });
      // Do something with the file URLs, such as storing them in a database or sending them in a response
      const newPet = await Pet.create({ ...req.body, images });
      res.status(200).json(newPet);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Error uploading files",
        error: err.message,
      });
    }
  }
);

router.post("/login", limiter, passport.authenticate("local"), (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

router.get("/logout", async (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy();
    res.status(204).json();
  });
});

router.get("/auth", (req, res) => {
  if (!req.isAuthenticated()) {
    res.status(400).json({ message: "Permission denied" });
  } else {
    res.status(200).json({});
  }
});

module.exports = router;
