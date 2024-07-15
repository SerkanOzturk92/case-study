import React from 'react';

type Bet = any; // TODO: update after finish

type Props = {
  data: Bet[];
  setData: (data: Bet[]) => void;
}

export const BetContext = React.createContext<Props>({ data: [], setData: () => {}});
