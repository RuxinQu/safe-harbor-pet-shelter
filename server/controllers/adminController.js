const router = require("express").Router();
const upload = require("../util/imageHelper");
const {
  generateHtml,
  mailOptions,
  transporter,
} = require("../util/emailHelper");
const { Pet } = require("../models");

router.post("/upload-images", upload.array("images", 10), async (req, res) => {
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
});

router.post("/adopt", (req, res) => {
  const html = generateHtml(req);
  transporter.sendMail(
    { ...mailOptions, html, text: JSON.stringify(req.body) },
    function (err, data) {
      if (err) {
        console.log("Error " + err);
        res.status(500).json();
      } else {
        console.log("Email sent successfully");
        res.status(200).json();
      }
    }
  );
});

module.exports = router;
