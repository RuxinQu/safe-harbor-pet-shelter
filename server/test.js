const bcrypt = require("bcrypt");
require("dotenv").config();

const pasHash = process.env.ADMIN_PASSWORD_HASH;
const input = "525079Qrx";
bcrypt.compare(input, pasHash, (err, result) => {
  if (err) {
    console.error(err);
  } else if (result === true) {
    console.log("Passwords match!");
  } else {
    console.log("Passwords do not match");
  }
});
