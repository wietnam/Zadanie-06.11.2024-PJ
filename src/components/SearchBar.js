// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Wpisz tytuł filmu..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px', fontSize: '16px' }}>
        Szukaj
      </button>
    </div>
  );
};

export default SearchBar;
