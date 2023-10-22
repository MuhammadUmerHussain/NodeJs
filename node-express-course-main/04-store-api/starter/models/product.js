const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name required"],
  },
  price: {
    type: Number,
    required: [true, "Product price required"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    tye: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    enum: {
      value: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
