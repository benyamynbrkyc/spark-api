const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: String, // validate this
    quantity: Number, // validate this
    vendor: String, // validate this
  },
  { collection: 'products' }
);
module.exports = mongoose.model('Product', ProductSchema);
