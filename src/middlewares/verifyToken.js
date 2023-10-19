const jwt = require('jsonwebtoken');
const secretKey = require("../services/user.service")

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    // Si el token es inválido o ha expirado, se lanzará una excepción
    throw new Error('Token inválido o expirado');
  }
};

module.exports = verifyToken;
