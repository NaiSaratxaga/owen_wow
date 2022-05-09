//Hooks
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
//Services
import getApiData from '../services/fetchMovies';
import localStorage from '../services/localStorage';

//Components
import Filters from './Filters';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';

//Styles
import '../styles/App.scss';
import '../styles/core/reset.scss';

function App() {
  // Almacena si esta leyendo las escenas de pelicula de la API
  const [isLoading, setIsLoading] = useState(true);

  // Todas las escenas de películas obtenidas de la API
  const [allMovieScenes, setAllMovieScenes] = useState(
    localStorage.get('allMovieScenes', [])
  );

  // Las escenas de película que coinciden con el nombre y/o el año
  // Siempre son un subconjunto (igual o menor) de allMovieScenes
  const [filteredMovieScenes, setFilteredMovieScenes] = useState([]);

  // Filtros a aplicar
  const [movieNameFilterText, setMovieNameFilterText] = useState(
    localStorage.get('movieNameFilterText', '')
  );
  const [yearFilterValue, setYearFilterValue] = useState(
    localStorage.get('yearFilterValue', '')
  );

  const [filterCharacter, setFilterCharacter] = useState('');

  // Años películas
  const [availableYears, setAvailableYears] = useState([]);

  function resetState() {
    localStorage.remove('allMovieScenes');
    localStorage.remove('movieNameFilterText');
    localStorage.remove('yearFilterValue');

    setAllMovieScenes([]);
    setFilteredMovieScenes([]);
    setMovieNameFilterText('');
    setYearFilterValue('');
  }
  // Obtiene las escenas de pelicula de la Api y las asigna al
  // estado de todas y de filtradas (si no hay filtros se muestran todas)
  useEffect(() => {
    resetState();
    getApiData().then((movieScenes) => {
      const sortedMovieScenes = movieScenes.sort(compareMoviScenesByName);

      setAllMovieScenes(sortedMovieScenes);
      setFilteredMovieScenes(sortedMovieScenes);
      calculateAvailableYears(movieScenes);

      setIsLoading(false);
    });
  }, []);

  //Debemos guardar los datos en el local storage en un useEffect para que después de cambiar el local storage esté actualizado.
  //Lee del local storage los datos y guárdalos en el useState para que estén disponibles al arrancar la página.
  useEffect(() => {
    localStorage.set('allMovieScenes', allMovieScenes);
    localStorage.set('movieNameFilterText', movieNameFilterText);
    localStorage.set('yearFilterValue', yearFilterValue);
  }, [allMovieScenes, movieNameFilterText, yearFilterValue]);

  const compareMoviScenesByName = (movieScenesA, movieScenesB) => {
    if (movieScenesA.name > movieScenesB.name) {
      return 1;
    }
    if (movieScenesA.name < movieScenesB.name) {
      return -1;
    }
    return 0;
  };

  // Filtra escenas de pelicula por nombre de escena de película y año
  const filterMovieScenes = (movieName, year, character) => {
    const validMovieScenes = allMovieScenes.filter((movieScene) => {
      // para el nombre
      const isValidMovieName = !movieName
        ? true
        : movieScene.name.toLowerCase().includes(movieName.toLowerCase());
      // para el año
      const isValidYear = !year ? true : movieScene.year === year;

      const isValidMovieCharacter = !character
        ? true
        : movieScene.character.toLowerCase().includes(character.toLowerCase());

      // Es valida si cumple las 2 condiciones
      return isValidMovieName && isValidYear && isValidMovieCharacter;
    });

    const sortedMovieScenes = validMovieScenes.sort(compareMoviScenesByName);

    setFilteredMovieScenes(sortedMovieScenes);
  };

  const handlefilterMovieScenesByName = (movieSceneName) => {
    setMovieNameFilterText(movieSceneName);
    filterMovieScenes(movieSceneName, yearFilterValue, filterCharacter);
  };

  //filtrar escena por año
  const handlefilterMovieScenesByYear = (movieSceneYear) => {
    setYearFilterValue(movieSceneYear);
    filterMovieScenes(movieNameFilterText, movieSceneYear, filterCharacter);
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
  const handleChangeCharacter = (movieSceneCharacter) => {
    setFilterCharacter(movieSceneCharacter);
    filterMovieScenes(
      movieNameFilterText,
      yearFilterValue,
      movieSceneCharacter
    );
  };

  const { pathname } = useLocation();
  const dataPath = matchPath('/movieSceneDetail/:movieId', pathname);
  const movieId = dataPath !== null ? parseInt(dataPath.params.movieId) : null;
  const movieFound = allMovieScenes.find((movie) => movie.id === movieId);

  //Revisar rutas Not found/
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Filters
                initialFilterName={movieNameFilterText}
                initialFilterYear={yearFilterValue}
                initialFilterCharacter={filterCharacter}
                handlefilterMovieScenesByName={handlefilterMovieScenesByName}
                handlefilterMovieScenesByYear={handlefilterMovieScenesByYear}
                handleChangeCharacter={handleChangeCharacter}
                availableYears={availableYears}
              />
              <MovieSceneList
                isLoading={isLoading}
                dataMovie={filteredMovieScenes}
                movieNameFilterText={movieNameFilterText}
              />
            </>
          }
        />
        <Route
          path='/movieSceneDetail/:movieId'
          element={<MovieSceneDetail movie={movieFound} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
