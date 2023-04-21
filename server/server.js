const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./util/passport");
var expressStaticGzip = require("express-static-gzip");

const db = require("./db/connection");
const router = require("./controllers");
const { transporter } = require("./util/emailHelper");

const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const path = require("path");
require("dotenv").config();

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(
  expressStaticGzip(path.join(__dirname, "../client/build"), {
    enableBrotli: true,
    customCompressions: [
      {
        encodingName: "deflate",
        fileExtension: "zz",
      },
    ],
    orderPreference: ["br"],
  })
);

// mongoose.set("debug", true);

app.use(passport.initialize());
app.use(passport.session());
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
