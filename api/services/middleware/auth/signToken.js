const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../../../config');

module.exports = (userObject) => {
  return jwt.sign({ userObject }, JWT_SECRET, { expiresIn: '1h' });
};
