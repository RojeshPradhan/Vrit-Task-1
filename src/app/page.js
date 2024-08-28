"use client";
import React, { useState } from 'react';

const SearchFilterComponent = () => {
  const [query, setQuery] = useState('');
  const items = ['Elden Ring', 'Dota 2', 'Wukong', 'CS', 'Sekiro', 'Valorant', 'PUBG'];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-14">
     
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Search Items</h2>

      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6 text-black"
      />

      <ul className="list-disc pl-5 space-y-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="text-gray-700 font-medium">{item}</li>
          ))
        ) : (
          <li className="text-gray-500 italic">No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilterComponent;