import React from 'react';
import { getValueByPath } from '../utils/helpers';
import { useCartContext } from '../context/Cart';

export type BetCellPropsType = {
  bet?: any;
  valueKey: string;
};

const BetCell = ({ bet, valueKey }: BetCellPropsType) => {
  const { selectBet, isSelectedBet } = useCartContext();
  const cellValue = getValueByPath(bet, valueKey);

  if (!bet) return <td></td>;

  const styles = {
    background: isSelectedBet(bet.NID, valueKey) ? 'yellow' : 'white',
    cursor: 'pointer'
  };
  return (
    <td
      style={{ ...styles }}
      onClick={() => {
        selectBet(bet.NID, isSelectedBet(bet.NID, valueKey) ? undefined : valueKey);
      }}>
      {cellValue || ''}
    </td>
  );
};

export default BetCell;
