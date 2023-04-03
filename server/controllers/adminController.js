const { S3Client } = require("@aws-sdk/client-s3");
const router = require("express").Router();
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");
const { Pet } = require("../models");
require("dotenv").config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
});

// images is the key!
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET_NAME,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + uuidv4() + "-" + file.originalname);
    },
  }),
});

router.post("/upload-images", upload.array("images", 10), async (req, res) => {
  try {
    const { name, type, gender, breed, age, description } = req.body;
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

module.exports = router;
