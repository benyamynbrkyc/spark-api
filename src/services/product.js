// service / business logic for the Product database model

const Product = require('../models/product.model');

// find all products in the db
const findAllProducts = async () => {
  const products = await Product.find({}).exec();

  return products;
};

// create a new product
const createProduct = async (newProduct) => {
  try {
    await Product.create(newProduct);
    return { newProduct };
  } catch (err) {
    console.log(err);
    return { err };
  }
};

// edit an existing product, update only passed in values
const editProduct = async (changedProduct) => {
  try {
    await Product.findByIdAndUpdate(changedProduct._id, changedProduct).exec();
    return { changedProduct };
  } catch (err) {
    console.log(err);
    return { err };
  }
};

// delete an existing product (filtered by id)
const deleteProduct = async (id) => {
  try {
    await Product.findByIdAndDelete(id).exec();
    return { message: 'Deleted product' };
  } catch (error) {
    console.log(err);
    return { err };
  }
};

module.exports = { findAllProducts, createProduct, editProduct, deleteProduct };
