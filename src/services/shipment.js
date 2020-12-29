const Shipment = require('../models/shipment.model');

const createShipment = async (shipment) => {
  try {
    await Shipment.create(shipment);
  } catch (err) {
    return { err };
  }
};

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
