//MovieDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`/api/movies/${id}`);
        setMovie(response.data);
      } catch (error) {
        setError('Error fetching movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>No movie details available</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
        <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        <div className="streaming-options">
          <h2>Streaming Options</h2>
          {movie['watch/providers']?.results?.US?.flatrate?.length > 0 ? (
            movie['watch/providers'].results.US.flatrate.map(provider => (
              <div key={provider.provider_id}>
                <p>{provider.provider_name}</p>
              </div>
            ))
          ) : (
            <p>No streaming options available</p>
          )}
        </div>
        <div className="videos">
          <h2>Videos</h2>
          {movie.videos?.results?.filter(video => video.type === 'Trailer' || video.type === 'Teaser').length > 0 ? (
            movie.videos.results.filter(video => video.type === 'Trailer' || video.type === 'Teaser').map(video => (
              <ReactPlayer key={video.id} url={`https://www.youtube.com/watch?v=${video.key}`} />
            ))
          ) : (
            <p>No videos available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
