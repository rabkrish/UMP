// backend/routes/tmdb.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/recommended', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    console.error('Error fetching recommended movies:', error);
    res.status(500).json({ error: 'Failed to fetch recommended movies' });
  }
});

router.get('/trending', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    res.status(500).json({ error: 'Failed to fetch trending movies' });
  }
});

module.exports = router;
