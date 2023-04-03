const router = require("express").Router();
const {
  generateHtml,
  mailOptions,
  transporter,
} = require("../util/emailHelper");
const { Pet } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allPets = await Pet.find();
    res.status(200).json(allPets);
  } catch (err) {
    res.status(500).json(err);
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
