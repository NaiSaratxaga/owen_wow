import '../styles/layout/NotFound.scss';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <h3 className='notFound__container'>
      <p className='notFound__ouch'>Ouuuuuuch!</p>
      <p>WoOoOoOWWWWoOOooWwWwwWW La URL no existe! :(</p>
      <Link className='notFound__linkHome' to='/'>
        Vuelve a la página de inicio
      </Link>
    </h3>
  );
};

export default NotFound;
