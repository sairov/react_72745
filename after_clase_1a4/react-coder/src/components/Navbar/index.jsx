import logo from '../../assets/logo.svg';
import CartWidget from '../CartWidget';
import ItemList from '../ItemList';

import './index.css';

const Navbar = () => {

  return(
    <header className="header">
      <nav className="navbar container">
        <figure className="navbar__logo">
          <img src={logo} alt="" />
        </figure>
        <menu className="navbar__menu">
          <ItemList label="Shop" />
          <ItemList label="Contato" />
          <ItemList label="Login" />
          <li>
            <a href="" className='navbar__link'>
              <CartWidget quantity={2} />
            </a>
          </li>
        </menu>
      </nav>
    </header>
  );
}

export default Navbar;