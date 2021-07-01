import React from 'react';
import CartIcon from '../cart/cartIcon';
import Classes from './HeaderCart.module.css'

const HeaderCart = () => {
  return (
    <button className={Classes.button} >
      <span className={Classes.icon} >
        <CartIcon />
      </span>
      <span > your cart </span>
      <span className={Classes.badge} > 3 </span>
    </button>
  );
};


export default HeaderCart; 