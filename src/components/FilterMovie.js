function FilterMovie(props) {
  const handleChangeMovie = (ev) => {
    props.handlefilterMovieScenesByName(ev.target.value);
  };

  return (
    <>
      <fieldset>
        <label htmlFor='name'>Movie</label>
        <input
          type='text'
          className=''
          name='text'
          id='name'
          placeholder='Search by movie name'
          onChange={handleChangeMovie}
        />
      </fieldset>
    </>
  );
}

export default FilterMovie;
