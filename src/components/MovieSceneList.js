//Listado de las películas
import '../styles/layout/MovieSceneList.scss';

import MovieSceneItem from './MovieSceneItem';
import NoMovieScenes from './NoMovieScenes';

function MovieSceneList(props) {
  if (props.dataMovie.length === 0) {
    return <NoMovieScenes movieNameFilterText={props.movieNameFilterText} />;
  } else {
    const movieItem = props.dataMovie.map((movie) => {
      return (
        <li key={movie.id}>
          <MovieSceneItem movie={movie}></MovieSceneItem>
        </li>
      );
    });

    return (
      <main className='movieSceneList__container'>
        <ul className='movieSceneList__cardsContainer'>{movieItem}</ul>
      </main>
    );
  }
}
export default MovieSceneList;
