// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold">Unified Streaming Platform</Link>
        <div className="flex-grow mx-4">
          <Search />
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/popular" className="hover:text-gray-400">Popular</Link>
          <Link to="/watchlist" className="hover:text-gray-400">Watchlist</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
          <Link to="/register" className="hover:text-gray-400">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
