// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerUser = (userData) => {
  return API.post('/auth/register', userData);
};

export const loginUser = (userData) => {
  return API.post('/auth/login', userData);
};

export const searchMovies = (query) => {
  return API.get('/movies/search', { params: { query } });
};

export const fetchMovies = (type) => {
  return API.get(`/movies/${type}`);
};

export const fetchMovieDetails = (id) => {
  return API.get(`/movies/${id}`);
};
