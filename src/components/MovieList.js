//Listado de las películas

import '../styles/MovieList.scss';

function MovieList(props) {
  const movieItem = props.dataMovie.map((movie, index) => {
    return (
      <li className='card' key={index}>
        <img className='movie_poster' src={movie.poster} alt='image poster' />
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

export default MovieList;
