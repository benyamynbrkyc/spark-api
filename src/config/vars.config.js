// export sensitive environment variables (process.env, dotenv package)

const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_ATLAS_CONNECTION_STRING = process.env.MONGO_ATLAS_CONNECTION_STRING;
const ROLE = {
  ADMIN: 'admin',
  CUSTOMER: 'customer'
};

module.exports = {
  JWT_SECRET,
  MONGO_ATLAS_CONNECTION_STRING,
  ROLE
};
