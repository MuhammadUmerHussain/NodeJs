const Products = require("../models/product");

const getAllProducts = async (req, res) => {
  const results = await Products.find({});
  res.status(200).json({ results });
};
const getAllProductsStatic = async (req, res) => {
  const { featured, name, company, sort, fields, numericFilters } = req.query;
  const queryObjects = {};
  if (featured) {
    queryObjects.featured = featured == "true" ? true : false;
  }
  if (name) {
    console.log(name, "name");
    queryObjects.name = { $regex: name, $options: "i" };
  }
  if (company) {
    queryObjects.company = company;
  }

  console.log(queryObjects);
  let result = Products.find(queryObjects);
  if (sort) {
    console.log(result);
    const sortlist = sort.split(",").join(" ");
    result = result.sort(sortlist);
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    const list = fields.split(",").join(" ");
    result = result.select(list);
  }
  page = Number(req.query.page) || 1;
  limit = Number(req.query.limit) || 10;
  skip = (page - 1) * limit;
  result.skip(skip).limit(limit);

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObjects[field] = { [operator]: Number(value) };
      }
    });
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
