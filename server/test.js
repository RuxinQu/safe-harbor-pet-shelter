const router = require("express").Router();
const { Pet } = require("../models");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const multer = require("multer");

const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
});

// const storage = multer.memoryStorage({
//   destination: function (req, file, callback) {
//     callback(null, "");
//   },
// });

// image is the key!
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

router.post("/addpets", upload.array("images", 10), async (req, res) => {
  //   const { name, type, gender, breed, age, description } = req.body;
  console.log(req.body);
  //   const params = paramsConfig(req.file);
  const options = { partSize: 5 * 1024 * 1024, queueSize: 10 };
  //   try {
  //     await s3.send(new PutObjectCommand(params), options);
  //     const url = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
  //     const newPet = await Pet.create({
  //       name,
  //       type,
  //       gender,
  //       breed,
  //       age,
  //       images: [url],
  //     });
  //     console.log(req.body);
  //   } catch (error) {
  //     res.status(500).json(error.message);
  //   }
});

module.exports = router;
