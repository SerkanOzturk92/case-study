import React, { useMemo, useState } from 'react';
import { BetContext } from './betContext';
import { Bet } from './types';

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
