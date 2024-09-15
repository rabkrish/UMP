const express = require('express');
const router = express.Router();
const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/recommended', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recommended movies', error });
  }
});

router.get('/trending', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trending movies', error });
  }
});

router.get('/search', async (req, res) => {
  const query = req.query.query;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching search results', error });
  }
});

router.get('/:id', async (req, res) => {
  const movieId = req.params.id;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: TMDB_API_KEY,
        append_to_response: 'videos,reviews,similar,watch/providers'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching movie details for ID ${movieId}:`, error);
    res.status(500).json({ message: 'Error fetching movie details' });
  }
});

module.exports = router;
