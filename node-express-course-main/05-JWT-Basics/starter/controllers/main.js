const { sign } = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { name, password } = req.body;
  console.log(req.body);
  if (!name || !password) {
    throw new CustomAPIError("Invalid credentials", 400);
  }
  console.log("umer");
  const id = new Date().getDate(); // Use 'const' to declare 'id'
  const token = sign({ id, name }, process.env.jwt_sct, { expiresIn: '30d' });

  res.status(200).json({ msg: name, secret: token });
}

const dashboard = async (req, res) => {
  const lucky = Math.floor(Math.random() * 100);
  res.status(200).json({ msg: "fake message", secret: lucky });
}

module.exports = {
  login,
  dashboard
};
