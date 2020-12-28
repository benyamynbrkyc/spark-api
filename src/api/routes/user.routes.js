const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

// services
const signToken = require('../middleware/auth/signToken');
const {
  createUser,
  findUserByEmailAndPassword,
} = require('../../services/user');

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

router.post('/signup', async (req, res) => {
  const newUser = req.body;

  const hashedPass = await bcrypt.hash(newUser.password, saltRounds);
  newUser.password = hashedPass;

  try {
    const user = await createUser(newUser);

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
