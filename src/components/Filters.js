import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

import '../styles/layout/Filters.scss';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className='filters'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <FilterMovie
            initialFilterName={props.initialFilterName}
            handlefilterMovieScenesByName={props.handlefilterMovieScenesByName}
          />
        </fieldset>
        <fieldset>
          <FilterYear
            initialFilterYear={props.initialFilterYear}
            handlefilterMovieScenesByYear={props.handlefilterMovieScenesByYear}
            availableYears={props.availableYears}
          />
        </fieldset>
      </form>
    </section>
  );
}

export default Filters;
