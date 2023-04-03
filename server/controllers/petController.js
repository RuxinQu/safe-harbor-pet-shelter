const router = require("express").Router();
const { Pet } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allPets = await Pet.find();
    res.status(200).json(allPets);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
