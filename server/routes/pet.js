const router = require("express").Router();
const { getAllPets } = require("../controllers/petController");

router.route("/pets").get(getAllPets);

module.exports = router;
