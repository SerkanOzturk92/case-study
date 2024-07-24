import React from 'react';
import Home from './Home';
import { BetProvider } from './context/Bet';
import { CartProvider } from './context/Cart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BetProvider>
          <CartProvider>
            <Home />
          </CartProvider>
        </BetProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
