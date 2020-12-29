// service / business logic for the Order database model

const Order = require('../models/order.model');

// create a new order
// orders cannot be revoked after being placed, so no edit or remove service
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
