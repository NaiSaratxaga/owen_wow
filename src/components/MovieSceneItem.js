//Para cada película//
function MovieSceneItem(props) {
  return (
    <>
      <img src={props.movie.image} alt='' />
      <h3>
        {props.movie.name} - {props.movie.year}
      </h3>
      <p>{props.movie.full_line}</p>
      <p>{props.movie.director}</p>
      <p>{props.movie.audio}</p>
    </>
  );
}

export default MovieSceneItem;
