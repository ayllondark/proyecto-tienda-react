import React from 'react';
import OrderItem from '../components/OrderItem.jsx';
import Menu from '../components/Menu.jsx';
import '../styles/Checkout.scss';

// rafce = crea la funcion recoveryPassword y agrega el impor de react de arriba
const Checkout = () => {
  return (
    <div className="Checkout">
    <div className="Checkout-container">
      <h1 className="title">My order</h1>
      <div className="Checkout-content">
          <div className="order">
            <p>
                <span>03.25.21</span>
                <span>06 articles</span>
            </p>
            <p>$560.00</p>
          </div>
      </div>
      <OrderItem />
    </div>
  </div>  
  );
}

export default Checkout;