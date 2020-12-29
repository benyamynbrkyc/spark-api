// route handlers for operations with the User database model

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

// middleware imports
const signToken = require('../middleware/auth/signToken');

// service / business logic imports
const {
  createUser,
  findUserByEmailAndPassword,
  checkIfUserExists
} = require('../../services/user');

// log in handler, finds a user from credentials passed in through
// req.body.userCredentials and returns a user object with the signed jwt token
// stored in Vuex store on the frontend
router.post('/login', async (req, res) => {
  const userCredentials = req.body.userCredentials;

  const user = await findUserByEmailAndPassword(userCredentials);

  if (user.err) {
    res.status(401);
    return res.send({ err: 'User not found' });
  }
  const token = signToken(userCredentials);

  res.send({ message: 'Logged in', user, token });
});

// sign up handler, creates a new user with a hashed password and saves to the db
router.post('/signup', async (req, res) => {
  const newUser = req.body;

  const hashedPass = await bcrypt.hash(newUser.password, saltRounds);
  newUser.password = hashedPass;

  try {
    const userExists = await checkIfUserExists(newUser.email);

    if (userExists)
      return res.send({ message: 'User already exists', status: 403 });

    const user = await createUser(newUser);
    console.log(user);

    if (!user.err) {
      const token = signToken(newUser);

      res.status(200);
      return res.send({ message: 'Successfully created user', user, token });
    } else {
      res.send({ message: 'Could not create user', err });
    }
  } catch (err) {
    res.send({ message: 'Could not create user', err });
  }
});

module.exports = router;
