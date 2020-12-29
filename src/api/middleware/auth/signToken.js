// provision a jwt token signature
// set the jwt_secret in a .env file in the root of the project
// or set manually / inline for testing
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../../config/vars.config');

module.exports = (userObject) => {
  return jwt.sign({ userObject }, JWT_SECRET);
};
