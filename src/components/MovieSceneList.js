//Listado de las películas
import '../styles/MovieSceneList.scss';

import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const movieItem = props.dataMovie.map((movie) => {
    return (
      <li key={movie.id}>
        <MovieSceneItem movie={movie}></MovieSceneItem>
      </li>
    );
  });
  //si el texto no coincide con la descripcion que salga un mensaje
  //<li>No hay ningún nombre que coincida con la búsqueda</li>;
  return (
    <section>
      <ul className='cards'>{movieItem}</ul>
    </section>
  );
}

export default MovieSceneList;
