// service / business logic for the Shipment database model

const Shipment = require('../models/shipment.model');

// create a new shipment
const createShipment = async (shipment) => {
  try {
    await Shipment.create(shipment);
  } catch (err) {
    return { err };
  }
};

// get shipments for a user (a user cannot se shipments of other people)
// no delete or edit as shipments are already shipped
const getShipments = async (id) => {
  try {
    const shipments = await Shipment.find({ customer_id: id });
    return { shipments };
  } catch (err) {
    return { err };
  }
};

module.exports = {
  createShipment,
  getShipments
};
