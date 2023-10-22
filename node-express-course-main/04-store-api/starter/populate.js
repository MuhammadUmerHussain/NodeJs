const connectDB = require("./db/connect");

require("dotenv").config();

jsonProducts = require("./products.json");

Product = require("./models/product");

start = async () => {
  try {
    await connectDB(process.env.mongo_url);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    process.exit(0);
  } catch (err) {
    console.log(error);
    process.exit(1);
  }
};
start();
