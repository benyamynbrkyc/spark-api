const { users } = require('../../../data');
module.exports = (req, res, next) => {
  const userId = req.body.userId;

  if (userId) req.user = users.find((user) => user.id === userId);

  next();
};
