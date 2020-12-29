// service / business logic for the User database model

const User = require('../models/user.model');
const bcrypt = require('bcrypt');

// find all users in the db
const findAllUsers = async () => {
  const users = await User.find({}).lean().exec();

  return users;
};

// create a new user (used when signing up)
const createUser = async (user) => {
  try {
    await User.create(user);
    return { user };
  } catch (err) {
    console.log(err);
    return { err };
  }
};

// find a user by email and password (compare hash with the bcrypt package)
const findUserByEmailAndPassword = async (userCredentials) => {
  const user = await User.findOne({ email: userCredentials.email }).exec();
  if (!user) {
    return { err: 'no user', status: 401 };
  }

  const match = bcrypt.compareSync(userCredentials.password, user.password);

  if (!match) return { err: 'invalid password', status: 401 };

  return user;
};

// find a user by id
const findUserById = async (id) => {
  const user = await User.findOne({ _id: id }).exec();
  if (user) console.log(user, true);
  if (!user) console.log('no user', user, false);
  return;
};

// check if a user exists in the database (filtered by email)
const checkIfUserExists = async (email) => {
  const user = await User.findOne({ email }).exec();
  if (user) return true;
  return false;
};

module.exports = {
  findAllUsers,
  createUser,
  findUserByEmailAndPassword,
  checkIfUserExists,
  findUserById
};
