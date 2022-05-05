import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import getApiData from '../services/fetchMovies';
//import LocalStorage from "../services/localStorage"

import Filters from './Filters';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';

import Header from './Header';
import Footer from './Footer';

function App() {
  // Todas las escenas de películas obtenidas de la API
  // Nunca cambia una vez asignado
  const [allMovieScenes, setAllMovieScenes] = useState([]);

  // Las escenas de película que coinciden con el nombre y/o el año
  // Siempre son un subconjunto (igual o menor) de allMovieScenes
  const [filteredMovieScenes, setFilteredMovieScenes] = useState([]);

  // Filtros a aplicar
  const [movieNameFilterText, setMovieNameFilterText] = useState('');
  const [yearFilterValue, setYearFilterValue] = useState();

  // Años películas
  const [availableYears, setAvailableYears] = useState([]);

  // Obtiene las escenas de pelicula de la Api y las asigna al
  // estado de todas y de filtradas (si no hay filtros se muestran todas)
  useEffect(() => {
    getApiData().then((movieScenes) => {
      setAllMovieScenes(movieScenes);
      setFilteredMovieScenes(movieScenes);
      calculateAvailableYears(movieScenes);
    });
  }, []);

  // Filtra escenas de pelicula por nombre de escena de película y año (cuando aplique)
  const filterMovieScenes = (movieName, year) => {
    const validMovieScenes = allMovieScenes.filter((movieScene) => {
      // para el nombre
      const isValidMovieName = !movieName
        ? true
        : movieScene.name
            .toLowerCase()
            .includes(movieNameFilterText.toLowerCase());
      // para el año
      const isValidYear = !year ? true : movieScene.year === year;

      // Es valida si cumple las 2 condiciones
      return isValidMovieName && isValidYear;
    });

    setFilteredMovieScenes(validMovieScenes);
  };

  const handlefilterMovieScenesByName = (movieSceneName) => {
    setMovieNameFilterText(movieSceneName);
    filterMovieScenes(movieSceneName, yearFilterValue);
  };

  //filtrar escena por año
  const handlefilterMovieScenesByYear = (movieSceneYear) => {
    setYearFilterValue(movieSceneYear);
    filterMovieScenes(movieNameFilterText, movieSceneYear);
  };

  //calcular todos los años en availableYears, tengo que cogerlo de la Api y guardarlos
  const calculateAvailableYears = (movieScenes) => {
    const yearsFromMovieScenes = movieScenes.map((movieScene) => {
      return movieScene.year;
    });
    //función para que no se dupliquen los años
    const yearsFromMovieScenesWithoutDuplicates = Array.from(
      new Set(yearsFromMovieScenes)
    ).sort();

    setAvailableYears(yearsFromMovieScenesWithoutDuplicates);
  };

  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = allMovieScenes.find((movie) => movie.id === movieId);

  return (
    <>
      <Header />

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Filters
                handlefilterMovieScenesByName={handlefilterMovieScenesByName}
                handlefilterMovieScenesByYear={handlefilterMovieScenesByYear}
                availableYears={availableYears}
              />
              <MovieSceneList dataMovie={filteredMovieScenes} />
            </>
          }
        />
        <Route
          path='/movie/:movieId'
          element={<MovieSceneDetail movie={movieFound} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
