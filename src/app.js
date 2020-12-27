const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
require('./config/db.config');
// services
const setUser = require('./api/middleware/setUser');
// routes
const userRouter = require('./api/routes/user.routes');

// app config
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(setUser);
app.use(require('morgan')('dev'));

// routes
app.use('/user', userRouter);

// TODO:
// organize routes in files
// create signup
// create users on signup

app.listen(PORT, console.log(`Server listening on ${PORT}`));
