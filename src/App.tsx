import React from 'react';
import Home from './Home';
import { BetProvider } from './context/Bet';
import { CartProvider } from './context/Cart';
import { ThemeProvider } from './context/Theme/themeProvider';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <BetProvider>
          <CartProvider>
            <Home />
          </CartProvider>
        </BetProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
