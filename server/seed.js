const connection = require("./db/connection");
const { Pet, Image } = require("./models/index");
connection.on("error", (err) => console.error(err));
connection.once("open", async () => {
  try {
    await Pet.deleteMany({});
    await Pet.collection.insertOne({
      name: "ahuang",
      type: "dog",
      gender: "Female",
      images: [
        {
          url: "https://pet-shelter-images-984cfa2e-cffb-11ed-afa1-0242ac120002.s3.us-west-2.amazonaws.com/a-yellow.JPG",
        },
      ],
    });
    console.log("=============Seeding complete ===========");
  } catch (error) {
    console.log(error);
  }
});
