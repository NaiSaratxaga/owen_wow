import '../styles/layout/FilterMovie.scss';

function FilterCharacter(props) {
  const handleChangeCharacter = (ev) => {
    props.handleChangeCharacter(ev.target.value);
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
        placeholder='Movie FilterCharacter'
        onChange={handleChangeCharacter}
        value={props.initialFilterCharacter}
      />
    </div>
  );
}

export default FilterCharacter;
