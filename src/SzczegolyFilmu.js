import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SzczegolyFilmu = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blad, setBlad] = useState(null);

  useEffect(() => {
    const pobierzFilm = async () => {
      try {
        const odpowiedz = await axios.get(`http://www.omdbapi.com/?apikey=c4b8628b&i=${id}`);
        setFilm(odpowiedz.data);
      } catch (err) {
        setBlad('Problem z załadowaniem szczegółów filmu.');
      } finally {
        setLoading(false);
      }
    };

    pobierzFilm();
  }, [id]);

  if (loading) return <div>Ładowanie...</div>;
  if (blad) return <div>{blad}</div>;

  return (
    <div className="szczegoly-filmu">
      <h2>{film.Title} ({film.Year})</h2>
      <img src={film.Poster} alt={film.Title} />
      <p>{film.Plot}</p>
      <p><strong>Reżyser:</strong> {film.Director}</p>
      <p><strong>Aktorzy:</strong> {film.Actors}</p>
      <p><strong>Gatunek:</strong> {film.Genre}</p>
      <p><strong>Ocena IMDb:</strong> {film.imdbRating}</p>
    </div>
  );
};

export default SzczegolyFilmu;
