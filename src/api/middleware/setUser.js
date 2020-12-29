const User = require('../../models/user.model');
const { findAllUsers, findUserById } = require('../../services/user');

module.exports = async (req, res, next) => {
  const userId = req.body.userId;
  if (!userId) return res.send({ message: 'userId missing' });

  findUserById(userId);

  const users = await findAllUsers();

  const foundUser = users.find((user) => user._id == userId);

  if (foundUser) {
    req.user = foundUser;
    return next();
  } else {
    return res.send({
      message: 'No user found',
      status: 404
    });
  }
};
