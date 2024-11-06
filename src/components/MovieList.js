// src/components/MovieList.js
import React from 'react';

const MovieList = ({ movies, onSelectMovie }) => {
  if (movies.length === 0) {
    return <p>Brak wyników wyszukiwania.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => onSelectMovie(movie.imdbID)}
          style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            maxWidth: '200px'
          }}
        >
          <img src={movie.Poster} alt={`${movie.Title} Poster`} style={{ width: '100%' }} />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
