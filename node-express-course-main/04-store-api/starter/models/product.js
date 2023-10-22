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
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: String,
    enum: ["ikea", "liddy", "caressa", "marcos"],
    // The enum field defines allowed values; you don't need a message here.
  },
});

module.exports = mongoose.model("Product", productSchema);
