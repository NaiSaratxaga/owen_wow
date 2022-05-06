import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className=''>
      <form onSubmit={handleSubmit}>
        <FilterMovie
          initialFilterName={props.initialFilterName}
          handlefilterMovieScenesByName={props.handlefilterMovieScenesByName}
        />
        <FilterYear
          initialFilterYear={props.initialFilterYear}
          handlefilterMovieScenesByYear={props.handlefilterMovieScenesByYear}
          availableYears={props.availableYears}
        />
      </form>
    </section>
  );
}

export default Filters;
