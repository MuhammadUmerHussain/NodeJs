const express = require("express");

const routes = express.Router();
const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/products");
routes.route("/").get(getAllProducts);
routes.route("/static").get(getAllProductsStatic);

module.exports = routes;
