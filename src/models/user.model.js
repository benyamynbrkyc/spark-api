const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2
    },
    email: {
      type: String,
      required: true,
      minlength: 3,
      unique: true
    },
    phone: {
      type: String,
      minlength: 9,
      validate: {
        validator: function (value) {
          const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
          return regex.test(value);
        },
        message: 'Phone number must be in format: +(123)-123-456-789'
      }
    },
    birth_date: {
      type: String,
      validate: {
        validator: function (value) {
          const regex = /^[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
          return regex.test(value);
        },
        message: 'Birth Date must be in format: 2002-28-02'
      },
      default: new Date()
    },
    role: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          if (value !== 'admin' && value !== 'customer') return false;
          return true;
        },
        message: "Role must be either 'admin' or 'customer'"
      }
    },
    password: {
      type: String,
      required: true
    },
    profile_pic: {
      type: String
    }
  },
  { collection: 'users' }
);

module.exports = mongoose.model('User', UserSchema);
