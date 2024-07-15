import { RowId } from '../Cart';

export type Bet = any; // TODO: update after finish

export type BetContextProps = {
  bets: Bet[];
  betMap: Record<RowId, Bet>;
  setBets: (bets: Bet[]) => void;
};
