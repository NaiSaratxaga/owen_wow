function FilterMovie(props) {
  const handleChangeMovie = (ev) => {
    props.handlefilterMovieScenesByName(ev.target.value);
  };

  return (
    <>
      <fieldset>
        <label htmlFor='name'>Movie</label>
        <input
          type='search'
          className=''
          name='name'
          id='name'
          placeholder='Search by movie name'
          onChange={handleChangeMovie}
        />
      </fieldset>
    </>
  );
}

export default FilterMovie;
