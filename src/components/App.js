import '../styles/App.scss';
import { useState, useEffect } from 'react';
//import { Link, Route, Routes} from "react-router-dom";

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

  // Obtiene las escenas de pelicula de la Api y las asigna al
  // estado de todas y de filtradas (si no hay filtros se muestran todas)
  useEffect(() => {
    getApiData().then((movieScenes) => {
      setAllMovieScenes(movieScenes);
      setFilteredMovieScenes(movieScenes);
    });
  }, []);

  // Filtra escenas de pelicula por nombre de escena de película y año (cuando aplique)
  const filterMovieScenes = () => {
    const validMovieScenes = allMovieScenes.filter((movieScene) => {
      // para el nombre
      const isValidMovieName = !movieNameFilterText
        ? true
        : movieScene.name
            .toLowerCase()
            .includes(movieNameFilterText.toLowerCase());
      // para el año
      const isValidYear = !yearFilterValue
        ? true
        : movieScene.year === yearFilterValue;

      // Es valida si cumple las 2 condiciones
      return isValidMovieName && isValidYear;
    });

    setFilteredMovieScenes(validMovieScenes);
  };

  const handlefilterMovieScenesByName = (movieSceneName) => {
    setMovieNameFilterText(movieSceneName);
    filterMovieScenes();
  };
  //filtrar escena por año
  const handlefilterMovieScenesByYear = (movieSceneYear) => {
    setYearFilterValue(movieSceneYear);
    filterMovieScenes();
  };

  return (
    <>
      <Header />
      <main>
        <Filters
          handlefilterMovieScenesByName={handlefilterMovieScenesByName}
          handlefilterMovieScenesByYear={handlefilterMovieScenesByYear}
        />
        <MovieSceneList dataMovie={filteredMovieScenes} />
      </main>
      <Footer />
    </>
  );
}

export default App;
