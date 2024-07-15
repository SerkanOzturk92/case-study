import { useContext } from 'react';
import { BetContext } from './betContext';

export const useBetProvider = () => useContext(BetContext);
