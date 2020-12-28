const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    created_at: Date, // validate this
    cost: Number, // validate this
    delivery_address: String, // validate this
  },
  { collection: 'orders' }
);
module.exports = mongoose.model('Order', OrderSchema);
