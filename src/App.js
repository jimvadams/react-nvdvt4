import React from 'react';
import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
    console.log('hello');
  };
  const closeCartHandler = () => {
    setCartShown(false);
    console.log('cart is closed');
  };

  return (
    <CartProvider>
      {cartShown && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
