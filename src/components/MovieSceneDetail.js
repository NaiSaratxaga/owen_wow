// Detalle de cada película
function MovieSceneDetail(props) {
  return (
    <>
      <section key={props.movie.index}>
        <img
          className=''
          src={props.movie.poster}
          alt='poster'
          title='poster'
        />
        <p>Name:{props.movie.movie}</p>
        <p>Quote:{props.movie.full_line}</p>
        <p>Director:{props.movie.director}</p>
        <a href={props.movie.audio} target='_blank' rel='noreferrer'>
          Audio
        </a>
      </section>
    </>
  );
}
export default MovieSceneDetail;
