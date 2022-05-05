// Detalle de cada película
import '../styles/MovieSceneDetail.scss';

function MovieSceneDetail(props) {
  const movie = props.movie;
  return (
    <>
      <section key={movie.index}>
        <img
          className='card__detail'
          src={movie.poster}
          alt='poster'
          title='poster'
        />
        <p>Name:{movie.movie}</p>
        <p>Quote:{movie.quote}</p>
        <p>Director:{movie.director}</p>
        <a href={movie.audio} target='_blank' rel='noreferrer'>
          Audio del WoOoOoOWWWW
        </a>
      </section>
    </>
  );
}
export default MovieSceneDetail;
