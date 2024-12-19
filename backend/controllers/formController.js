const FormData = require('../models/formData');

const submitForm = async (req, res) => {
  try {

    if (req.body.dob) {
      req.body.dob = new Date(req.body.dob);  // Convert dob string to Date object
    }

    if (req.body.kidsAge) {
      req.body.kidsAge = new Date(req.body.kidsAge); // Convert kidsAge (DOB) to Date object
    }

    const formData = new FormData(req.body);
    await formData.save();
    res.status(200).json({ message: 'Form submitted successfully' });
    console.log(formData);
    
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error });
  }
};

module.exports = { submitForm };
