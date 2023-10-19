const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken'); // Importa la función de validación

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization'); // Suponiendo que el token se envía en el encabezado 'Authorization'

  if (!token) {
    return res.status(401).json({ message: 'Token inválido o expirado.' });
  }

  try {
    const decoded = await verifyToken(token);
    req.user = decoded; // Almacenar la información del usuario en el objeto 'req' para su posterior uso
    next(); // Continuar con la solicitud
  } catch (error) {
    res.status(401).json({ message: 'Token inválido o expirado.' });
  }
};

module.exports = authMiddleware;