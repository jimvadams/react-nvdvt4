import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = [{ id: 'c1', name: 'tagine', amount: 2, price: 9.99 }].map(
    item => <li>{item.name}</li>
  );
  return (
    <Modal onCloseCart={props.onCloseCart} >
      <ul className={classes['cart-items']}> {cartItems} </ul>
      <div className={classes.total} >
        <span>Tottal Ampunt</span>
        <span>9.99$</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart} >close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
