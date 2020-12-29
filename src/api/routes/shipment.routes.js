// route handlers for operations with the Shipment database model

const express = require('express');
const router = express.Router();

// middleware imports
const verifyToken = require('../middleware/validation/verifyToken');
const { authUser } = require('../middleware/auth/auth');
const setUser = require('../middleware/setUser');
// service / business logic imports
const { createShipment, getShipments } = require('../../services/shipment');

// create a new shipment
router.post('/new', verifyToken, setUser, authUser, async (req, res) => {
  const shipment = req.body.shipment;

  try {
    const newShipment = await createShipment(shipment);
    return res.send({
      message: 'Successfully created shipment',
      ...newShipment
    });
  } catch (err) {
    res.status(400);
    res.send({ message: 'Could not create shipment', err });
  }
});

// get all shipments
// post request as a quick fix because axios behaves weirdly with
// GET requests that have a data object attached
router.post('/', verifyToken, setUser, authUser, async (req, res) => {
  const id = req.body.userId;

  try {
    const shipments = await getShipments(id);
    return res.send({ message: 'Found shipments', shipments });
  } catch (err) {
    res.status(500);
    res.send({ message: 'Could not find any shipments', err });
  }
});

module.exports = router;
