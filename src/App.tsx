import React from 'react';
import Home from './Home';
import { BetProvider } from './context/Bet';
import { CartProvider } from './context/Cart';
import './App.scss';

const App = () => {
  return (
    <div className={'app-container'}>
      <BetProvider>
        <CartProvider>
          <Home />
        </CartProvider>
      </BetProvider>
    </div>
  );
};

export default App;
