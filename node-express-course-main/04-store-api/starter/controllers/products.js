const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "hello from get all products" });
};
const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "hello from static" });
};

module.exports = { getAllProducts, getAllProductsStatic };
