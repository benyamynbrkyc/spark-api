// route handlers for operations with the Product database model

const express = require('express');
const router = express.Router();

// middleware imports
const verifyToken = require('../middleware/validation/verifyToken');
const { ROLE } = require('../../config/vars.config');
const { authUser, authRole } = require('../middleware/auth/auth');
const setUser = require('../middleware/setUser');

// service / business logic imports
const {
  findAllProducts,
  createProduct,
  editProduct,
  deleteProduct
} = require('../../services/product');

// get all products
router.get('/', async (req, res) => {
  const products = await findAllProducts();
  res.send(products);
});

// create a new product
router.post('/new', verifyToken, setUser, async (req, res) => {
  const newProduct = req.body.newProduct;

  try {
    const product = await createProduct(newProduct);
    return res.send({ message: 'Successfully created product', product });
  } catch (err) {
    res.status(400);
    res.send({ message: 'Could not create product', err });
  }
});

// edit an existing product
router.patch(
  '/edit',
  verifyToken,
  setUser,
  authUser,
  authRole(ROLE.ADMIN),
  async (req, res) => {
    const changedProduct = req.body.changedProduct;

    try {
      const product = await editProduct(changedProduct);
      return res.send({ message: 'Successfully edited product', product });
    } catch (err) {
      res.status(400);
      res.send({ message: 'Could not edit product', err });
    }
  }
);

// delete an existing product
router.delete(
  '/delete',
  verifyToken,
  setUser,
  authUser,
  authRole(ROLE.ADMIN),
  async (req, res) => {
    const id = req.body.productToDeleteId;

    try {
      const message = await deleteProduct(id);
      return res.send({ message });
    } catch (err) {
      res.status(400);
      res.send({ message: 'Could not delete product', err });
    }
  }
);

module.exports = router;
