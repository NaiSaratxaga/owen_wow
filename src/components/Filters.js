import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  return (
    <section className=''>
      <form>
        <FilterMovie filterMovieScenesByName={props.filterMovieScenesByName} />
        <FilterYear />
      </form>
    </section>
  );
}

export default Filters;
