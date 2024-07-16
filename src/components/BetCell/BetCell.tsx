import React from 'react';
import { getValueByPath } from '../../utils/helpers';
import { useCartContext } from '../../context/Cart';
import CellHeader from '../CellHeader/CellHeader';
import { BetCellPropsType } from './types';
import './BetCell.scss';

const BetCell = ({ bet, valueKey, cellHeader }: BetCellPropsType) => {
  const { selectBet, isSelectedBet } = useCartContext();
  const cellValue = getValueByPath(bet, valueKey);

  if (!bet) return <td></td>;

  return (
    <td className="bet-cell">
      <div className="bet-cell-container">
        <CellHeader headerText={cellHeader}></CellHeader>
        <div
          className="bet-cell-body"
          style={{ background: isSelectedBet(bet.NID, valueKey) ? 'yellow' : 'white' }}
          onClick={() => {
            selectBet(bet.NID, isSelectedBet(bet.NID, valueKey) ? undefined : valueKey);
          }}>
          {cellValue || ''}
        </div>
      </div>
    </td>
  );
};

export default BetCell;
