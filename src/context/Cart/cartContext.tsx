import React from 'react';
import { CartContextProps } from './types';

export const CartContext = React.createContext<CartContextProps>({selectedBetMap: {}, selectBet: () => {}, isSelectedBet: () => false});