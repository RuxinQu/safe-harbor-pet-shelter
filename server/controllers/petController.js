const { Pet } = require("../models");
const PetController = {
  async getAllPets(req, res) {
    try {
      const allPets = await Pet.find();
      console.log(allPets);
      res.status(200).json(allPets);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = PetController;
