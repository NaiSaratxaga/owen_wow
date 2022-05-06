import '../styles/layout/Header.scss';
import logo from '../images/logo.jpeg';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'> Owen Wilson </h1>
      <img className='header__logo' src={logo} alt='Owen' title='Owen' />
    </header>
  );
}

export default Header;
