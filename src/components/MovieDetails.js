// src/components/MovieDetails.js
import React from 'react';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return null;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{movie.Title} ({movie.Year})</h2>
      <p><strong>Reżyser:</strong> {movie.Director}</p>
      <p><strong>Aktorzy:</strong> {movie.Actors}</p>
      <p><strong>Gatunek:</strong> {movie.Genre}</p>
      <p><strong>Ocena IMDb:</strong> {movie.imdbRating}</p>
      <p><strong>Opis:</strong> {movie.Plot}</p>
      <img src={movie.Poster} alt={`${movie.Title} Poster`} style={{ width: '300px' }} />
    </div>
  );
};

export default MovieDetails;
