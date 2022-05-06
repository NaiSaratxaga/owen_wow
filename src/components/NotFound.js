import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className=''>
      <p> WoOoOoOWWWWoOOooWwWwwWW La URL no existe! :(</p>

      <Link to='/'>Vuelve a nuestra WoOoOoOWWWWoOOooWwWwwWW inicial</Link>
    </section>
  );
};

export default NotFound;
