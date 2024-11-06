import React from 'react';
import KartaFilmu from './KartaFilmu';

const ListaFilmow = ({ filmy }) => {
  return (
    <div className="lista-filmow">
      {filmy.map(film => (
        <KartaFilmu key={film.imdbID} film={film} />
      ))}
    </div>
  );
};

export default ListaFilmow;
