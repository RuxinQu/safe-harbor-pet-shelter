const { Schema, model } = require("mongoose");
const imageSchema = require("./Image");

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  description: {
    type: String,
  },
  images: [imageSchema],
});

const Pet = model("Pet", petSchema);
module.exports = Pet;
