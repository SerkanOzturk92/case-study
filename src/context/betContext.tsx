import React, { useContext, useMemo, useState } from 'react';
import { RowId } from './cartContext';

type Bet = any; // TODO: update after finish

type BetContextProps = {
  bets: Bet[];
  betMap: Record<RowId, Bet>;
  setBets: (bets: Bet[]) => void;
};

export const BetContext = React.createContext<BetContextProps>({
  bets: [],
  setBets: () => {},
  betMap: {}
});

type BetProviderProps = {};
export const BetProvider = ({ children }: React.PropsWithChildren<BetProviderProps>) => {
  const [bets, setBets] = useState<Bet[]>([]);

  const betMap = useMemo(
    () =>
      bets.reduce((map, bet) => {
        map[bet.NID] = bet;
        return map;
      }, {}),
    [bets]
  );

  const value = useMemo(() => ({ bets, setBets, betMap }), [bets, betMap]);
  return <BetContext.Provider value={value}>{children}</BetContext.Provider>;
};

export const useBetProvider = () => useContext(BetContext);
