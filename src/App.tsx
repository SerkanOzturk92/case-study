import React from 'react';
import Home from "./Home";
import { CartProvider } from './context/cartContext';

const App = () => {
    return <div>
        <CartProvider>
            <Home/>
        </CartProvider>
    </div>
}

export default App;
