const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/validation/verifyToken');
const { authUser } = require('../middleware/auth/auth');
const setUser = require('../middleware/setUser');
const { createOrder } = require('../../services/order');

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
