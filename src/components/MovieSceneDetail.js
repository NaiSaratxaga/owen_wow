// Detalle de cada película
//botón atrás

import '../styles/MovieSceneDetail.scss';

function MovieSceneDetail(props) {
  const movie = props.movie;
  const handleClickBtn = (ev) => {
    props.getBackToIndex();
  };
  return (
    <>
      <section key={movie.index}>
        <img
          className='card__detail'
          src={movie.poster}
          alt='poster'
          title='poster'
        />
        <p>Name:{movie.name}</p>
        <p>Quote:{movie.quote}</p>
        <p>Director:{movie.director}</p>
        <a href={movie.audio} target='_blank' rel='noreferrer'>
          Audio WoOoOoOWWWWoOOooWwWwwWW
        </a>
        <button type='button' onClick={handleClickBtn}>
          <a href='/'>Volver al listado de pelis</a>
        </button>
      </section>
    </>
  );
}
export default MovieSceneDetail;
