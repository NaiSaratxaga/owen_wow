// Detalle de cada película
//botón atrás
import '../styles/layout/MovieSceneDetail.scss';
import { Link } from 'react-router-dom';

function MovieSceneDetail(props) {
  const movie = props.movie;

  return (
    <div className='card__container'>
      <section key={movie.index}>
        <img
          className='card__poster'
          src={movie.poster}
          alt='poster'
          title='poster'
        />
        <p className='card__text'>Name:{movie.name}</p>
        <p className='card__quote'>Quote:{movie.quote}</p>
        <p className='card__director'>Director:{movie.director}</p>
        <a
          className='button__link'
          href={movie.audio}
          target='_blank'
          rel='noreferrer'
        >
          Audio WoOoOoOWWWWoOOooWwWwwWW
        </a>
        <button className='button__back' type='button'>
          <Link to={'/'}>
            <p>Volver al listado de pelis</p>
          </Link>
        </button>
      </section>
    </div>
  );
}
export default MovieSceneDetail;
