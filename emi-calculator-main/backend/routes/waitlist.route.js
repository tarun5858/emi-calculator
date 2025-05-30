const express = require('express');
const router = express.Router();

const WaitlistFormSchema =  require('../schema/waitlist')

// POST route to submit form
router.post('/submit', async (req, res) => {
  try {
    const formData = new WaitlistFormSchema(req.body);
    await formData.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
});

module.exports = router;
