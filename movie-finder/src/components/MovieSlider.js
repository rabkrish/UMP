// src/components/MovieSlider.js
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieSlider = ({ title, movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {movies && movies.length > 0 ? (
        <Slider {...settings}>
          {movies.map(movie => (
            <div key={movie.id} className="p-2">
              <Link to={`/movie/${movie.id}`}>
                <div className="relative group">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto rounded-lg group-hover:opacity-75 transition duration-300 ease-in-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <p className="text-sm">{movie.title}</p>
                    <div className="flex justify-center space-x-2 mt-2">
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition">
                        <FontAwesomeIcon icon="play" /> Watch now
                      </button>
                      <button className="bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-900 transition">
                        <FontAwesomeIcon icon="thumbs-up" />
                      </button>
                      <button className="bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-900 transition">
                        <FontAwesomeIcon icon="thumbs-down" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <p>No movies available</p>
      )}
    </div>
  );
};

export default MovieSlider;
