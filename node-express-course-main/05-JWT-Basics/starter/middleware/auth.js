const { sign, verify } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("Authorization Error ");
  }

  const removeBearer = authHeader.split(" ")[1];
  try {
    const decode = jwt.verify(removeBearer, process.env.jwt_sct);

    const { id, username } = decode;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new CustomAPIError("Authorization Error ");
  }
};

module.exports = { authMiddleware };
