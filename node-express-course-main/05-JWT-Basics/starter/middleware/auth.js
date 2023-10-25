const { sign, verify } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const UnauthenticatedError = require("../errors");
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authorization Error ");
  }

  const removeBearer = authHeader.split(" ")[1];
  try {
    const decode = jwt.verify(removeBearer, process.env.jwt_sct);

    const { id, username } = decode;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new UnauthenticatedError("Authorization Error ");
  }
};

module.exports = { authMiddleware };
