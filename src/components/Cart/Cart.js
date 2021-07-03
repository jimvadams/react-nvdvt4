import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/Cart-Context';
import CartItem from './CartItem';

const Cart = props => {
  const cartCTX = useContext(CartContext);
  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
  const hasItems = cartCTX.items.length > 0;
  console.log(cartCTX);

  const cartItemRemoveHandler = id => {};

  const cartItemAddHandler = (item) => {
    cartCTX.items(item);
  };

  const cartItems = cartCTX.items.map(item => (
    <CartItem
      key={item.id}
      price={item.price}
      name={item.name}
      amount={item.amount}
      onAdd={cartItemAddHandler}
      onRemove={cartItemRemoveHandler}
    />
  ));

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <ul className={classes['cart-items']}> {cartItems} </ul>
      <div className={classes.total}>
        <span>Tottal Amount</span>
        <span> {totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>
          close
        </button>
        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
