import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  return (
    <section className=''>
      <form>
        <FilterMovie
          handlefilterMovieScenesByName={props.handlefilterMovieScenesByName}
        />
        <FilterYear
          handlefilterMovieScenesByYear={props.handlefilterMovieScenesByYear}
        />
      </form>
    </section>
  );
}

export default Filters;
