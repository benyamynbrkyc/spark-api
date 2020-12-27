const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

// services
const verifyToken = require('../middleware/validation/verifyToken');
const { ROLE } = require('../../config/vars.config');
const signToken = require('./middleware/auth/signToken');
const {
  createUser,
  findUserByEmailAndPassword,
} = require('../../services/user');

router.post('/login', async (req, res) => {
  const userCredentials = req.body.userCredentials;

  const token = signToken(userCredentials);

  const user = await findUserByEmailAndPassword(userCredentials);

  console.log(token, user);

  res.send({ message: 'Logged in', user, token });
});

router.post('/signup', async (req, res) => {
  const newUser = req.body;

  const hashedPass = await bcrypt.hash(newUser.password, saltRounds);
  newUser.password = hashedPass;

  try {
    const user = await createUser(newUser);

    const token = signToken(newUser);

    res.status(200);
    return res.send({ message: 'Successfully created user', user, token });
  } catch (err) {
    res.send({ message: 'Could not create user', err });
  }
});

module.exports = router;
