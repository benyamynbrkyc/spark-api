// mongoose Schema / Model definition for shipments

const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema(
  {
    sender_address: {
      type: String,
      trim: true
    },
    delivery_address: {
      type: String,
      trim: true
    },
    created_at: Date,
    delivered_at: Date,
    customer_id: {
      type: String,
      trim: true
    },
    products: {
      type: Array
    }
  },
  { collection: 'shipments' }
);
module.exports = mongoose.model('Shipment', ShipmentSchema);
