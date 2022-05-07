import '../styles/layout/NoMovieScenes.scss';

const NoMovieScenes = (props) => {
  const movieNameFilterText = props.movieNameFilterText;

  return (
    <h3 className='noMovieScenes__container'>
      <p className='noMovieScenes__ouch'>Ouuuuuuch!</p>
      <span>There are no WoWoWo Movie Scene with name:&nbsp;</span>
      <span className='noMovieScenes__term'>"{movieNameFilterText}"</span>
    </h3>
  );
};

export default NoMovieScenes;
