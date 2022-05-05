function Form() {
  return (
    <form>
      <label htmlFor=''>Movie</label>
      <input
        autoComplete='off'
        type='text'
        name='text'
        placeholder='Filter by movie'
      />
      <label htmlFor=''>Year</label>
      <select name='Filter by year' id=''>
        <option>All</option>
        <option value=''>""</option>
        <option value=''>"</option>
        <option value=''>"</option>
      </select>
    </form>
  );
}
export default Form;
