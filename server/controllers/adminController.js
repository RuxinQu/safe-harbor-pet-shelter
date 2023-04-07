const router = require("express").Router();
const { upload, removeFileFromS3 } = require("../util/imageHelper");
const passport = require("passport");
const rateLimit = require("express-rate-limit");
const isLoggedIn = require("../util/auth");
const { Pet } = require("../models");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per windows
  message: "Too many requests, please try again later",
});

router.post("/upload-imgs", upload.array("images", 10), async (req, res) => {
  try {
    const files = req.files;
    // Create an array of the uploaded file URLs
    const images = files.map((file) => {
      return { url: file.location };
    });
    // Do something with the file URLs, such as storing them in a database or sending them in a response
    res.status(200).json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error uploading files",
      error: err.message,
    });
  }
});

router.delete(
  "/delete-img/:key/pet/:petId/img/:imgId",
  removeFileFromS3,
  async (req, res) => {
    // code to delete the image from the database
    const { petId, imgId } = req.params;
    try {
      await Pet.findByIdAndUpdate(
        petId,
        { $pull: { images: { _id: imgId } } },
        { new: true }
      );
    } catch (err) {
      console.log(err);
    }
  }
);

router.post(
  "/add-pets",
  // isLoggedIn,
  async (req, res) => {
    try {
      const newPet = await Pet.create(req.body);
      newPet
        ? res.status(201).json({ message: "new pet added" })
        : res.status(400).json({ message: "failed to add new pet" });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Error uploading files",
        error: err.message,
      });
    }
  }
);

// router.put("/edit-pet", isLoggedIn, async (req, res) => {
router.put("/edit-pet", async (req, res) => {});

// router.delete("/delete-pet/:id", isLoggedIn, async (req, res) => {
router.delete("/delete-pet/:id", async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Pet deleted" });
  } catch (err) {
    res.status(404).json();
  }
});

router.post("/login", limiter, passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy();

    res.status(204).json();
  });
});

router.get("/auth", isLoggedIn, (req, res) => {
  res.status(200).json();
});

module.exports = router;
