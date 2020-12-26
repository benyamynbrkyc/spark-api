const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
require('./config/db');
// services
const setUser = require('./api/services/middleware/setUser');
const { authUser, authRole } = require('./api/services/middleware/auth/auth');
const signToken = require('./api/services/middleware/auth/signToken');
// routes
const projectRouter = require('./api/routes/projects.route');

// app config
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(setUser);

// routes
app.use('/projects', projectRouter);

// middleware
const verifyToken = require('./api/services/middleware/validation/verifyToken');
const { ROLE } = require('./data');

app.get('/api', (req, res) => {
  res.send({
    message: 'Welcome to the API',
  });
});

app.get('/api/dashboard', verifyToken, authUser, (req, res) => {
  res.send({
    message: 'Dashboard Page',
  });
});

app.get(
  '/api/admin',
  verifyToken,
  authUser,
  authRole(ROLE.ADMIN),
  (req, res) => {
    res.send({
      message: 'Admin Page',
    });
  }
);

app.post('/api/posts', verifyToken, (req, res) => {
  res.send({
    message: 'Post created.',
    authData: res.locals.authData,
  });
});

app.post('/api/login', (req, res) => {
  const user = {
    id: 1,
    name: 'benjo',
    email: 'benjo@gmail.com',
  };

  const token = signToken(user);

  res.send({ token });
});

app.listen(PORT, console.log(`Server listening on ${PORT}`));
