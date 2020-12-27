const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const findAllUsers = async () => {
  const users = await User.find({}).lean().exec();

  return users;
};

const createUser = async (user) => {
  try {
    await User.create(user);
    return { user };
  } catch (err) {
    return { err };
  }
};

const findUserByEmailAndPassword = async (userCredentials) => {
  const user = await User.findOne({ email: userCredentials.email }).exec();
  if (!user) {
    return { err: 'no user', status: 401 };
  }

  const match = bcrypt.compareSync(userCredentials.password, user.password);

  if (!match) return { err: 'invalid password', status: 401 };

  return user;
};

module.exports = { findAllUsers, createUser, findUserByEmailAndPassword };
