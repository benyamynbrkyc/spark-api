// route handlers for operations with the Order database model

const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/validation/verifyToken');
const { authUser } = require('../middleware/auth/auth');
const setUser = require('../middleware/setUser');
const { createOrder } = require('../../services/order');

// create an order
// order deletion and modifying is not written as a user
// is not able to modify an order after it has been placed
router.post('/new', verifyToken, setUser, authUser, async (req, res) => {
  const order = req.body.order;

  try {
    const newOrder = await createOrder(order);
    return res.send({
      message: 'Successfully created order',
      ...newOrder
    });
  } catch (err) {
    res.status(400);
    res.send({ message: 'Could not create order', err });
  }
});

module.exports = router;
