import '../styles/layout/FilterMovie.scss';

function FilterMovie(props) {
  const handleChangeMovie = (ev) => {
    props.handlefilterMovieScenesByName(ev.target.value);
  };

  return (
    <div className='filterMovie__container'>
      <label className='filterMovie__title' htmlFor='name'>
        Movie:
      </label>
      <input
        type='text'
        name='text'
        id='name'
        placeholder='Movie name'
        onChange={handleChangeMovie}
        value={props.initialFilterName}
      />
    </div>
  );
}

export default FilterMovie;
