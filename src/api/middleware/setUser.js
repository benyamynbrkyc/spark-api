// middleware that runs after jwt authentication
// reads the userId field from the request object (userId is mandatory for the api to authenticate)
// userId is stored in Vuex on the frontend
const User = require('../../models/user.model');
const { findAllUsers, findUserById } = require('../../services/user');

module.exports = async (req, res, next) => {
  const userId = req.body.userId;
  if (!userId) return res.send({ message: 'userId missing' });

  // find and set the user object on the request object
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
