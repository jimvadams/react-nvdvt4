import React from 'react';

const addItemToCartHandler = item => {};
const removeItemFromCartHandler = id => {};

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHandler
});

export default CartContext;
