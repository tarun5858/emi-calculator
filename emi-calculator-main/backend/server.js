
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const waitlistRoutes = require('./routes/waitlist.route.js');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// MongoDB URI
const MONGO_URI = "mongodb+srv://prehome_website_user:1ywa7PfsUW3pPWvt@lead-tracking.jysawuj.mongodb.net/website_forms";

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully.'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/waitlist', waitlistRoutes);

app.get('/', (req, res) => {
  res.send('Server is running and MongoDB is connected!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
