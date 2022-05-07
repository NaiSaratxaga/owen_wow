// Detalle de cada película
import '../styles/layout/MovieSceneDetail.scss';
import { Link } from 'react-router-dom';
import arrow from '../images/arrow.png';

function MovieSceneDetail(props) {
  const { poster, name, quote, director, audio } = props.movie;

  return (
    <section className='movieScene__container'>
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
          <h3 className='movieScene__director'>by {director}</h3>

          {/* Quote */}
          <blockquote className='movieScene__quote'>{quote}</blockquote>
        </div>
        {/* Links */}
        <nav className='movieScene__navContainer'>
          <Link className='movieScene__linkHome' to={'/'}>
            <img className='movieScene__linkHomeIcon' src={arrow} alt='arrow' />
            <p> Volver al listado de pelis</p>
          </Link>

          <button className='movieScene__cta'>
            <a
              className='movieScene__linkAudio'
              href={audio}
              target='_blank'
              rel='noreferrer'
            >
              Audio WoWoOW!
            </a>
          </button>
        </nav>
      </section>
    </section>
  );
}
export default MovieSceneDetail;
