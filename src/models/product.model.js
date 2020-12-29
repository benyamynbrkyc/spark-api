// mongoose Schema / Model definition for products

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    vendor: {
      type: String,
      trim: true,
      required: true
    },
    price: {
      type: Number,
      trim: true,
      required: true
    },
    img_url: {
      type: String,
      trim: true,
      required: true,
      default:
        'https://lh3.googleusercontent.com/proxy/R_zPtEnwMLbgviEXCFgSV-7Mj0iHHwiIcCUUv1Iyl0ekWiiwiY6tNTvWAuwzI5yzEd8Y-IxZMQP-rsqmIK1V8CcELl08qdPT9hln0ri4wc33'
    }
  },
  { collection: 'products' }
);

module.exports = mongoose.model('Product', ProductSchema);
