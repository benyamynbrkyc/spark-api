const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../../config/vars.config');
// token format:
// Bearer <jwt-access-token>
// because of this format, we split it and extract only the <jwt-access-token>
const verifyToken = (req, res, next) => {
  // get auth header value, we send it as a bearer token
  const bearer = req.headers['authorization'];
  if (bearer == undefined) return res.sendStatus(403);

  // split to get token
  const token = bearer.split(' ')[1];

  // verify token validity
  jwt.verify(token, JWT_SECRET, (err, authData) => {
    if (err) return res.sendStatus(403);

    res.locals.authData = authData;
    req.token = token;
    next();
  });
};

module.exports = verifyToken;
