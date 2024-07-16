import React from 'react';
import Home from './Home';
import { BetProvider } from './context/Bet';
import { CartProvider } from './context/Cart';

const App = () => {
  return (
    <>
      <BetProvider>
        <CartProvider>
          <Home />
        </CartProvider>
      </BetProvider>
    </>
  );
};

export default App;
