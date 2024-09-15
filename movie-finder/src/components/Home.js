// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import MovieSlider from './MovieSlider';

const Home = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const recommendedResponse = await fetchMovies('recommended');
        const trendingResponse = await fetchMovies('trending');

        setRecommendedMovies(recommendedResponse.data.results || []);
        setTrendingMovies(trendingResponse.data.results || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6">Recommended Movies</h2>
        {recommendedMovies.length > 0 ? (
          <MovieSlider movies={recommendedMovies} />
        ) : (
          <div>No movies available</div>
        )}
        <h2 className="text-3xl font-bold mt-12 mb-6">Trending Movies</h2>
        {trendingMovies.length > 0 ? (
          <MovieSlider movies={trendingMovies} />
        ) : (
          <div>No movies available</div>
        )}
      </div>
    </div>
  );
};

export default Home;
