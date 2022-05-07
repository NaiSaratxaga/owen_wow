import { Link } from 'react-router-dom';
import '../styles/layout/MovieSceneItem.scss';

//Para cada película
function MovieSceneItem(props) {
  return (
    <Link className='card' to={`/movieSceneDetail/${props.movie.id}`}>
      <img src={props.movie.poster} alt='poster' title='poster' />
      <p className='card__title'>
        {props.movie.name} ({props.movie.year})
      </p>
      <p className='card__subtitle'>{props.movie.quote}</p>
    </Link>
  );
}

export default MovieSceneItem;
