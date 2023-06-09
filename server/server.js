const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
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
    // store the session data in mongodb
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
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

// render the compressed build file
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

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
