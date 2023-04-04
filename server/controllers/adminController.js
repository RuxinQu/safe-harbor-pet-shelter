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
  "/upload-images",
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
  res.json(req.user);
});

router.get("/logout", async (req, res) => {
  req.session.destroy();
  res.json({ message: "Logout success" });
});

router.get("/user", (req, res) => {
  const user = req.session.user;
  res.json(user);
});
module.exports = router;
