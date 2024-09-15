// src/components/Watchlist.js
import React from 'react';

const Watchlist = () => {
  return (
    <div className="p-4">
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">My Watchlist</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <div className="h-40 bg-gray-300"></div>
            <p className="mt-2">Image Title</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <div className="h-40 bg-gray-300"></div>
            <p className="mt-2">Image Title</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <div className="h-40 bg-gray-300"></div>
            <p className="mt-2">Image Title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
