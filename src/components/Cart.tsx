import { useCartContext } from '../context/cartContext';
import { useBetProvider } from '../context/betContext';
import { getValueByPath } from '../utils/helpers';
import React, { useMemo } from 'react';

const Cart = () => {
  const { selectedBetMap } = useCartContext();
  const { betMap } = useBetProvider();

  const selectedBetKeys = Object.entries(selectedBetMap);

  const selectedBets = useMemo(() => selectedBetKeys.map(([rowId, colId]) => {
    const bet = betMap[rowId];
    const cellValue = getValueByPath(bet, colId);
    return { bet, cellValue };
  }), [selectedBetKeys, betMap]);

  const getTotal = () =>
    selectedBets.length > 0 ? selectedBets.reduce((total, item) => total * item.cellValue, 1).toFixed(2) : 0;

  const styles = {
    position: 'fixed',
    display: 'block',
    right: 0,
    bottom: 0,
    width: '400px',
    height: 'min-content',
    zIndex: 1,
    background: 'white',
    border: '1px solid black',
    maxHeight: '400px',
    overflow: 'auto'
  } as React.CSSProperties;

  return (
    <div style={styles}>
      {selectedBets.map(({ bet, cellValue }, i) => (
        <div style={{ margin: '20px', borderBottom: '1px solid gray' }}>
          {bet.C} {bet.N} - {cellValue}
        </div>
      ))}

      <div style={{ margin: '0 20px', position:'sticky', bottom:0, padding: '20px', background:'white' }}> Toplam Tutar: {getTotal()} TL</div>
    </div>
  );
};

export default Cart;
