const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXP_TIME = process.env.JWT_EXP_TIME;
const MONGO_ATLAS_CONNECTION_STRING = process.env.MONGO_ATLAS_CONNECTION_STRING;
const ROLE = {
  ADMIN: 'admin',
  CUSTOMER: 'customer',
};

module.exports = {
  JWT_SECRET,
  JWT_EXP_TIME,
  MONGO_ATLAS_CONNECTION_STRING,
  ROLE,
};
