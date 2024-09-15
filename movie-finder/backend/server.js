// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose.connect('mongodb://localhost:27017/moviefinder', {})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movie');
const profileRoutes = require('./routes/profile');

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes); // Ensure this line is present
app.use('/api/profile', profileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
