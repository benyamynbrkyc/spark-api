const Order = require('../models/order.model');

const createOrder = async (order) => {
  try {
    await Order.create(order);
    return { order };
  } catch (err) {
    console.log(err);
    return { err };
  }
};

module.exports = {
  createOrder
};
