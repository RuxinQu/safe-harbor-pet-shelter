const router = require("express").Router();
const upload = require("../util/imageHelper");

const { admin, isLoggedIn } = require("../util/auth");
const { Pet } = require("../models");

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

router.post("/", admin, async (req, res) => {
  res.status(200).json({ message: "Login success" });
});

router.get("/logout", async (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: "Logout success" });
});

module.exports = router;
