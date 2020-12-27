const mongoose = require('mongoose');
const { MONGO_ATLAS_CONNECTION_STRING } = require('./vars.config');

mongoose.connect(MONGO_ATLAS_CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => {
  console.log('Successfully connected to MongoDB Atlas');
});
