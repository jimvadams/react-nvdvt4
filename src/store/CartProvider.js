import React , {useReducer} from 'react';
import CartContext from './Cart-Context';

const iniCartState = {
  item : 0 ,
  amount : 0
}

const cartReducer = ( state , action) => {
  return iniCartState; 
} 


const CartProvider = (props) => {

  const [cartState , dispatchCartAction] = useReducer(cartReducer , iniCartState);

  const addItemToCartHandler = item => {
    
  };
  const removeItemFromCartHandler = id => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
