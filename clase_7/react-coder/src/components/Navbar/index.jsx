import { useState, useEffect } from 'react';

import logo from '../../assets/logo.svg';
import CartWidget from '../CartWidget';
import ItemList from '../ItemList';
import Menu from '../Menu/Menu';

import './index.css';

const Navbar = () => {
  let [ cartQuantity, setCartQuantiy ] = useState(0);
  // TODA LA LOGICA NECESARIA ESCRITA EN LENGUAJE DE JAVASCRIPT

  const handleAdd = () => {
    setCartQuantiy(cartQuantity + 1);
  }

  const handleDelete = () => {
    setCartQuantiy(cartQuantity <= 0 ? 0 : cartQuantity - 1);
  }


  useEffect(() => {
    // console.log("Agregaste o quitaste un elemento del carrito");

  }, [cartQuantity])

  return(
    <header className="header">
      <nav className="navbar container">
        <figure className="navbar__logo">
          <img src={logo} alt="" />
        </figure>
        <Menu links={['Shop', 'Contacto', 'Login', 'pepe', 'hola']}>
          <li>
            <a href="" className='navbar__link'>
              <CartWidget quantity={cartQuantity} />
            </a>
          </li>
        </Menu>
        <div>
          <h3>Item random</h3>
          <button onClick={handleAdd}>Agregar</button>
          <button onClick={handleDelete}>Eliminar</button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;