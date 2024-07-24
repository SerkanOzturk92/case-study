import React from 'react';
import { BetContextProps } from './types';

export const BetContext = React.createContext<BetContextProps>({
  betMap: {}
});
