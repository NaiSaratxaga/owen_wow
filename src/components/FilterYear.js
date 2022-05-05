function FilterYear(props) {
  const handleChangeYear = (ev) => {
    props.handlefilterMovieScenesByYear(parseInt(ev.target.value));
  };
  return (
    <>
      <fieldset>
        <label htmlFor='year'>Year</label>
        <select name='Filter by year' id='' onChange={handleChangeYear}>
          <option value='All'>All</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
        </select>
      </fieldset>
    </>
  );
}

export default FilterYear;
