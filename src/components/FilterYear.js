import '../styles/layout/FilterYear.scss';

function FilterYear(props) {
  const handleChangeYear = (ev) => {
    props.handlefilterMovieScenesByYear(parseInt(ev.target.value));
  };

  const years = props.availableYears || [];
  const options = years.map((year) => {
    return (
      <option key={`${year}`} value={`${year}`}>
        {year}
      </option>
    );
  });

  return (
    <div className='filterYear__container'>
      <label className='filterYear__title' htmlFor='year'>
        Year
      </label>
      <select
        name='year'
        id='year'
        onChange={handleChangeYear}
        value={`${props.initialFilterYear}`}
      >
        <option value=''>All</option>
        {options}
      </select>
    </div>
  );
}

export default FilterYear;
