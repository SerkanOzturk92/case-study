import React from 'react';
import Home from "./Home";
import { CartProvider } from './context/cartContext';
import { BetProvider } from './context/betContext';

const App = () => {
    return <div>
        <BetProvider>
            <CartProvider>
                <Home/>
            </CartProvider>
        </BetProvider>
    </div>
}

export default App;
