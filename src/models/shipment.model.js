const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema(
  {
    sender_address: String, // validate this
    delivery_address: String, // validate this
    created_at: Date, // validate this
    delivered_at: Date, // validate this
  },
  { collection: 'shipments' }
);
module.exports = mongoose.model('Shipment', ShipmentSchema);
