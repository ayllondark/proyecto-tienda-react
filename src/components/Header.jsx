// rafce = crea la funcion recoveryPassword y agrega el impor de react de arriba
import React , { useState, useContext } from "react";

//import '../styles/Header.scss';  ya no usamos esto ya que creamos alias en la conf de webpack y queda como abajo
import '@styles/Header.scss';
import Menu from '@components/Menu.jsx';
import MyOrder from '@containers/MyOrder.jsx';
//const shoppingCart = '@icons/icon_shopping_cart.svg'; puedes utilizar constantes si llamas desde algun CDN externo
import menu from '@icons/icon_menu.svg'; // Si se trabaja con "Alias" vamos a tener que cambiarlo por el import y hacer el from hacia el elemento
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext.js';


const Header = () => {
  const [toggle, setToggle] = useState(false); // [] el primer valor va hacer lo q esta almavcenado en el estado  y el 2do va hacer la funcion que va a modificar esta pieza del estado
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com</li>
          <li className="navbar-shopping-cart"
            onClick={() =>setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
          </li>
        </ul>
      </div>
      {/* Si toggle es false no se muestra esta linea, pero si toogle se muestra verdadero, mostrara el menu */}
      {toggle && <Menu/>}
      {toggleOrders && <MyOrder />}
      
    </nav>
  );
};

export default Header;
