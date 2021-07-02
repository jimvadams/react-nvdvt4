import React, { useContext } from 'react';
import CartContext from '../../store/Cart-Context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  const Cartctx = useContext(CartContext);
  const CartTotaltNumberOfItem = Cartctx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{CartTotaltNumberOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;
