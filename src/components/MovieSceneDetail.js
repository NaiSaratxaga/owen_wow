// Detalle de cada película
//botón atrás
import '../styles/layout/MovieSceneDetail.scss';
import { Link } from 'react-router-dom';

function MovieSceneDetail(props) {
  const movie = props.movie;

  return (
    <div className='container'>
      <section key={movie.index}>
        <img
          className='poster'
          src={movie.poster}
          alt='poster'
          title='poster'
        />
      </section>

      <section className='text'>
        <p>Name:{movie.name}</p>
        <p>Quote:{movie.quote}</p>
        <p>Director:{movie.director}</p>
      </section>

      <section>
        <a className='link' href={movie.audio} target='_blank' rel='noreferrer'>
          Audio WoOoOoOWWWWoOOooWwWwwWW
        </a>
      </section>

      <section>
        <button className='button__back' type='button'>
          <Link to={'/'}>
            <p className='button__link'>Volver al listado de pelis</p>
          </Link>
        </button>
      </section>
    </div>
  );
}
export default MovieSceneDetail;
