import React, { useMemo, useState } from 'react';
import { BetContext } from './betContext';
import { Bet, IBet } from './types';
import useFetchBets from '../../hooks/useFetchBets';

type BetProviderProps = {};
export const BetProvider = ({ children }: React.PropsWithChildren<BetProviderProps>) => {
  const { data } = useFetchBets();

  const betMap = useMemo(
    () =>
      data?.reduce((map: Record<string, IBet>, bet: IBet) => {
        map[bet.NID] = bet;
        return map;
      }, {}),
    [data]
  );

  const value = useMemo(() => ({ betMap }), [betMap]);
  return <BetContext.Provider value={value}>{children}</BetContext.Provider>;
};
