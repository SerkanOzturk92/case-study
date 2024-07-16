import React, { useCallback, useMemo, useState } from 'react';
import { CartContext } from './cartContext';
import { ColId, RowId, SelectedBetMap } from './types';
type CartProviderProps = {};

export const CartProvider = ({ children }: React.PropsWithChildren<CartProviderProps>) => {
  const [selectedBetMap, setSelectedBetMap] = useState<SelectedBetMap>({});

  const selectBet = useCallback((rowId: RowId, colId?: ColId) => {
    setSelectedBetMap((prevState) => {
      if (colId) {
        prevState[rowId] = colId;
      } else {
        delete prevState[rowId];
      }
      return { ...prevState };
    });
  }, []);

  const isSelectedBet = useCallback(
    (rowId: RowId, colId: ColId) => {
      return selectedBetMap[rowId] === colId;
    },
    [selectedBetMap]
  );

  console.log('selectedBetMap', selectedBetMap);

  const value = useMemo(
    () => ({ selectedBetMap, selectBet, isSelectedBet }),
    [selectedBetMap, selectBet, isSelectedBet]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
