import React from 'react';
import Home from './Home';
import { BetProvider } from './context/Bet';
import { CartProvider } from './context/Cart';

const App = () => {
  return (
    <div>
      <BetProvider>
        <CartProvider>
          <Home />
        </CartProvider>
      </BetProvider>
    </div>
  );
};

export default App;
