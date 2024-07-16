import React from 'react';
import { getValueByPath } from '../utils/helpers';
import { useCartContext } from '../context/Cart';
import CellHeader from './CellHeader';

export type BetCellPropsType = {
  bet?: any;
  valueKey: string;
  cellHeader?: string;
};

const BetCell = ({ bet, valueKey, cellHeader }: BetCellPropsType) => {
  const { selectBet, isSelectedBet } = useCartContext();
  const cellValue = getValueByPath(bet, valueKey);

  if (!bet) return <td></td>;

  const styles = {
    display: 'flex',
    flexDirection: 'column'
  } as React.CSSProperties;
  return (
    <td style={{ border: '1px solid black', textAlign: 'center' }}>
      <div style={{ ...styles }}>
        <CellHeader headerText={cellHeader}></CellHeader>
        <div
          style={{
            height: 50,
            background: isSelectedBet(bet.NID, valueKey) ? 'yellow' : 'white',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
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
