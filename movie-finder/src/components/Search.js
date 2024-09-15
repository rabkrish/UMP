// src/components/Search.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      fetchSearchResults(query);
    } else {
      setResults([]);
    }
  }, [query]);

  const fetchSearchResults = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/movies/search`, {
        params: { query: searchTerm },
      });
      setResults(response.data.results);
      setDropdownVisible(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleResultClick = (id) => {
    navigate(`/movie/${id}`);
    setQuery('');
    setResults([]);
    setDropdownVisible(false);
  };

  const handleClose = () => {
    setDropdownVisible(false);
    setQuery('');
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex items-center bg-white text-black rounded-full shadow-md">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for movies"
          className="flex-grow px-4 py-2 rounded-l-full focus:outline-none"
          onFocus={() => setDropdownVisible(true)}
        />
        <button className="px-4 py-2 rounded-r-full bg-indigo-500 text-white">
          <FaSearch />
        </button>
        {dropdownVisible && (
          <button className="px-4 py-2 text-gray-500" onClick={handleClose}>
            <FaTimes />
          </button>
        )}
      </div>
      {dropdownVisible && results.length > 0 && (
        <div className="absolute w-full mt-2 bg-gray-800 text-white rounded-lg shadow-lg z-10">
          {results.map((result) => (
            <div
              key={result.id}
              className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleResultClick(result.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w92${result.poster_path}`}
                alt={result.title}
                className="w-12 h-16 rounded-md"
              />
              <div className="ml-4">
                <p className="font-bold">{result.title}</p>
                <p className="text-sm text-gray-400">{result.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
