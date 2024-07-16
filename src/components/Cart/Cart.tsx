import { getValueByPath } from '../../utils/helpers';
import React, { useMemo } from 'react';
import { useBetProvider } from '../../context/Bet';
import { useCartContext } from '../../context/Cart';
import './Cart.scss';

const Cart = () => {
  const { selectedBetMap } = useCartContext();
  const { betMap } = useBetProvider();

  const selectedBetKeys = Object.entries(selectedBetMap);

  const selectedBets = useMemo(
    () =>
      selectedBetKeys.map(([rowId, colId]) => {
        const bet = betMap[rowId];
        const cellValue = getValueByPath(bet, colId);
        return { bet, cellValue };
      }),
    [selectedBetKeys, betMap]
  );

  const getTotal = () =>
    selectedBets.length > 0
      ? selectedBets.reduce((total, item) => total * item.cellValue, 1).toFixed(2)
      : 0;

  return (
    <div className="cart">
      {selectedBets.map(({ bet, cellValue }, i) => (
        <div key={bet.NID} className="cart-header">
          Kod: {bet.C} Maç: {bet.N} <strong>Oran: {cellValue}</strong>
        </div>
      ))}
      <div className="cart-body"> Toplam Tutar: {getTotal()} TL</div>
    </div>
  );
};

export default Cart;
