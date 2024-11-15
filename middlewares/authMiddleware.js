// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token no válido' });
  }
  
};

module.exports = { authenticate };
