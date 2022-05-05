import { Link } from 'react-router-dom';

//Para cada película//
function MovieSceneItem(props) {
  return (
    <Link to={`/movieSceneDetail/${props.movie.id}`}>
      <img src={props.movie.poster} alt='' />
      <p>
        {props.movie.movie} - {props.movie.year}
      </p>
      <p>{props.movie.full_line}</p>
    </Link>
  );
}

export default MovieSceneItem;
