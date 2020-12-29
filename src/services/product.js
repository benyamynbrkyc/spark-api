const Product = require('../models/product.model');

const findAllProducts = async () => {
  const products = await Product.find({}).exec();

  return products;
};

const createProduct = async (newProduct) => {
  try {
    await Product.create(newProduct);
    return { newProduct };
  } catch (err) {
    console.log(err);
    return { err };
  }
};

const editProduct = async (changedProduct) => {
  try {
    await Product.findByIdAndUpdate(changedProduct._id, changedProduct).exec();
    return { changedProduct };
  } catch (err) {
    console.log(err);
    return { err };
  }
};

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
