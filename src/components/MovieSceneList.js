//Listado de las películas
import '../styles/layout/MovieSceneList.scss';
import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  if (props.dataMovie.length === 0) {
    return <p>No hay ninguna WoWoWW peli que coincida con tu búqueda</p>;
  } else {
    const movieItem = props.dataMovie.map((movie) => {
      return (
        <li key={movie.id}>
          <MovieSceneItem movie={movie}></MovieSceneItem>
        </li>
      );
    });

    return (
      <section>
        <ul className='cards'>{movieItem}</ul>
      </section>
    );
  }
}
export default MovieSceneList;
