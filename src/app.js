// necessary packages
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// run db connection code from an external file without an export
// (declutter server startup code)
require('./config/db.config');

// cross-origin resource sharing (request data from an external domain)
const cors = require('cors');

// routers
const userRouter = require('./api/routes/user.routes');
const productsRouter = require('./api/routes/product.routes');
const orderRouter = require('./api/routes/order.routes');
const shipmentsRouter = require('./api/routes/shipment.routes');

// app config
// basic app configuration:
// sets the PORT to an env variable or 3000(fallback)
// enable json parsing, urlencoded characters such as spaces
// enable morgan logging as a development dependency
// enable cors
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('morgan')('dev'));
app.use(cors());

// route handlers
app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use('/order', orderRouter);
app.use('/shipment', shipmentsRouter);

app.listen(PORT, console.log(`Server listening on ${PORT}`));
