const router = require("express").Router();
const petRoutes = require("./petController");
const adminRoutes = require("./adminController");

router.use("/pets", petRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
