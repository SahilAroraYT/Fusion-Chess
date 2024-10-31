const FormData = require('../models/formData');

const submitForm = async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(200).json({ message: 'Form submitted successfully' });
    console.log(formData);
    
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error });
  }
};

module.exports = { submitForm };
