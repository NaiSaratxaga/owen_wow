import '../styles/layout/LoadingMovieScenes.scss';

const NotFound = () => {
  return (
    <div className='loading'>
      <main className='loading__container'>
        <div class='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='loading__text'>
          Getting the Movie Scenes, it will take only a sec...
        </div>
      </main>
    </div>
  );
};

export default NotFound;
