
const mongoose = require('mongoose');

const WaitlistFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format'],
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits'],
  },
  selectedLocation: {
    type: String,
    required: true,
    enum: [
      'Golf Course Road',
      'Golf Course Extension Road',
      'Southern Peripheral Road',
      'Dwarka Expressway',
      'Sohna Road',
      'Other',
    ],
  },
  otherLocation: {
    type: String,
    trim: true,
    default: '',
  },
  selectedLayout: {
    type: String,
    required: true,
    enum: ['2 BHK', '3 BHK', 'Other'],
  },
  otherLayout: {
    type: String,
    trim: true,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{ collection: 'waitlist_leads' });

const WaitlistForm = mongoose.model('WaitlistForm', WaitlistFormSchema);

module.exports = WaitlistForm;
