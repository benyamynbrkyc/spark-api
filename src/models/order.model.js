// mongoose Schema / Model definition for orders

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    created_at: Date,
    cost: {
      type: Number,
      trim: true
    },
    delivery_address: {
      type: String,
      trim: true
    },
    customer_id: {
      type: String,
      trim: true
    },
    products: {
      type: Array
    }
  },
  { collection: 'orders' }
);
module.exports = mongoose.model('Order', OrderSchema);
