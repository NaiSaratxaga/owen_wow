// Detalle de cada película
import '../styles/layout/MovieSceneDetail.scss';
import { Link } from 'react-router-dom';

function MovieSceneDetail(props) {
  const { poster, name, quote, director, audio } = props.movie;

  return (
    <div className='movieScene__container'>
      <img
        className='movieScene__poster'
        src={poster}
        alt='poster'
        title='poster'
      />
      <section className='movieScene__details'>
        <div>
          {/* Movie scene info */}
          <h2 className='movieScene__title'>{name}</h2>
          <h3 className='movieScene__director'>{director}</h3>

          {/* Quote */}
          <blockquote className='movieScene__quote'>{quote}</blockquote>
        </div>

        <nav className='movieScene__navContainer'>
          <Link to={'/'}>
            <p className='movieScene__linkHome'> Volver al listado de pelis</p>
          </Link>

          <button className='btn__linkAudio'>
            <a href={audio} target='_blank' rel='noreferrer'>
              Audio WoWoOW!
            </a>
          </button>
        </nav>
      </section>
    </div>
  );
}
export default MovieSceneDetail;
