import React from 'react';
import { Link } from 'react-router-dom';

const KartaFilmu = ({ film }) => {
  return (
    <div className="karta-filmu">
      <img src={film.Poster} alt={film.Title} />
      <h2>{film.Title}</h2>
      <p>{film.Year}</p>
      <Link to={`/film/${film.imdbID}`}>Szczegóły</Link>
    </div>
  );
};

export default KartaFilmu;
