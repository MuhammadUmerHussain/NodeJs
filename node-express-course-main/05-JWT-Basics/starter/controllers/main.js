const { sign, verify } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
    throw new CustomAPIError("Invalid credentials", 400);
  }
  console.log("umer");
  const id = new Date().getDate(); // Use 'const' to declare 'id'
  const token = sign({ id, username }, process.env.jwt_sct, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: username, token });
};

const dashboard = async (req, res) => {
  const lucky = Math.floor(Math.random() * 100);
  console.log(req);
  res.status(200).json({
    msg: `Hello from ${req.user.username}`,
    secret: `here is your ${lucky}`,
  });
};

module.exports = {
  login,
  dashboard,
};
