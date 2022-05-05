//Listado de las películas
import '../styles/MovieSceneList.scss';

function MovieSceneList(props) {
  const movieItem = props.dataMovie.map((movie) => {
    return (
      <li className='card' key={movie.id}>
        <img src={movie.poster} alt='image poster' title='poster' />
        <p>{movie.movie}</p>
        <p>{movie.year}</p>
        <p>{movie.quote}</p>
      </li>
    );
  });

  return (
    <section>
      <ul className='cards'>{movieItem}</ul>
    </section>
  );
}

export default MovieSceneList;
