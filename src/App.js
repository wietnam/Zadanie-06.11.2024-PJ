// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const API_KEY = 'c4b8628b'; // Wklej swój klucz API tutaj

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setSelectedMovie(null);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error);
      alert('Wystąpił błąd podczas wyszukiwania.');
    }
  };

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
      if (response.data.Response === 'True') {
        setSelectedMovie(response.data);
      }
    } catch (error) {
      console.error('Błąd podczas pobierania szczegółów filmu:', error);
      alert('Nie udało się pobrać szczegółów filmu.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Wyszukiwarka Filmów</h1>
      <SearchBar onSearch={handleSearch} />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        <MovieList movies={movies} onSelectMovie={fetchMovieDetails} />
      )}
    </div>
  );
};

export default App;
