const express = require("express");
const app = express();
const db = require("./db/connection");
const mongoose = require("mongoose");
const router = require("./controllers");
const { transporter } = require("./util/emailHelper");
const PORT = process.env.PORT || 3001;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// mongoose.set("debug", true);
app.use(router);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}!`);
    transporter.verify((err, success) => {
      err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
    });
  });
});
