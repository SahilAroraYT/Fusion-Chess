const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dob: Date,
  country: String,
  experience: String,
  kidsName: String,
  kidsAge: String,
});

module.exports = mongoose.model('registerFormData', formDataSchema);
