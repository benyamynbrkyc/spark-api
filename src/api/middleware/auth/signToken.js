const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXP_TIME } = require('../../../config/vars.config');

module.exports = (userObject) => {
  return jwt.sign({ userObject }, JWT_SECRET, { expiresIn: JWT_EXP_TIME });
};
