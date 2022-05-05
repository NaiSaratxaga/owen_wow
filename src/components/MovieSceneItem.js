import { Link } from 'react-router-dom';

import '../styles/MovieSceneItem.scss';

//Para cada película
function MovieSceneItem(props) {
  return (
    <Link className='card' to={`/movieSceneDetail/${props.movie.id}`}>
      <img src={props.movie.poster} alt='poster' title='poster' />
      <p>
        {props.movie.name} -- {props.movie.year}
      </p>
      <p>{props.movie.quote}</p>
    </Link>
  );
}

export default MovieSceneItem;
