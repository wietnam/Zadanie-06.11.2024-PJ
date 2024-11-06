import React, { useState } from 'react';

const PasekWyszukiwania = ({ onSearch }) => {
  const [zapytanie, setZapytanie] = useState('');

  const obsluzSubmit = (e) => {
    e.preventDefault();
    if (zapytanie.trim()) {
      onSearch(zapytanie);
    }
  };

  return (
    <form onSubmit={obsluzSubmit} className="pasek-wyszukiwania">
      <input 
        type="text" 
        value={zapytanie} 
        onChange={(e) => setZapytanie(e.target.value)} 
        placeholder="Wpisz tytuł filmu..."
      />
      <button type="submit">Szukaj</button>
    </form>
  );
};

export default PasekWyszukiwania;
