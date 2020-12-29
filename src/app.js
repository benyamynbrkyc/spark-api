const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
require('./config/db.config');
const cors = require('cors');
// routes
const userRouter = require('./api/routes/user.routes');
const productsRouter = require('./api/routes/product.routes');
const orderRouter = require('./api/routes/order.routes');
const shipmentsRouter = require('./api/routes/shipment.routes');

// app config
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('morgan')('dev'));
app.use(cors());

// routes
app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use('/order', orderRouter);
app.use('/shipment', shipmentsRouter);

app.listen(PORT, console.log(`Server listening on ${PORT}`));
