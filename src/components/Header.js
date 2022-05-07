import '../styles/layout/Header.scss';
import header from '../images/header.png';

function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={header} alt='Owen' title='Owen' />
    </header>
  );
}

export default Header;
