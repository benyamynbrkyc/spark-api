const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000 || process.env.PORT;

// middleware
const verifyToken = require('./api/middleware/verifyToken');

app.get('/api', (req, res) => {
  res.send({
    message: 'Welcome to the API',
  });
});

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

  jwt.sign({ user }, 'supertajnikljuckojinikonesmijeznati', (err, token) => {
    return res.json({
      token,
    });
  });
});

app.listen(PORT, console.log(`Server listening on ${PORT}`));
