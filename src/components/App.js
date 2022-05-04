import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/fetchMovies';
import Filters from './Filters';
import MovieList from './MovieList';

function App() {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    getApiData().then((dataApi) => {
      setDataMovies(dataApi);
    });
  }, []);

  return (
    <>
      <div>
        <h1> Owen y su WOW</h1>
        <MovieList dataMovie={dataMovies} />
      </div>
    </>
  );
}

export default App;
