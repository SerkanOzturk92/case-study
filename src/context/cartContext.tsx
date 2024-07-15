import React, { useCallback, useContext, useMemo, useState } from 'react';

type CartContextProps = {
  selectedBetMap: SelectedBetMap;
  selectBet: (rowId: RowId, colId?: ColId)=>void;
  isSelectedBet: (rowId: RowId, colId: ColId)=>boolean;
};

export type RowId = string;
export type ColId = string;

type SelectedBetMap = Record<RowId, ColId>;

export const CartContext = React.createContext<CartContextProps>({selectedBetMap: {}, selectBet: () => {}, isSelectedBet: () => false});

type CartProviderProps = {};

export const CartProvider = ({ children }: React.PropsWithChildren<CartProviderProps>) => {
  const [selectedBetMap, setSelectedBetMap] = useState<SelectedBetMap>({});

  const selectBet = useCallback((rowId: RowId, colId?: ColId) => {
    setSelectedBetMap(prevState => {
      if(colId) {
        prevState[rowId] = colId;
      } else {
        delete prevState[rowId];
      }
      return { ...prevState };
    });
  }, []);

  const isSelectedBet = useCallback((rowId: RowId, colId: ColId) => {
    return selectedBetMap[rowId] === colId;
  },[selectedBetMap]);

  console.log('selectedBetMap',selectedBetMap);

  const value = useMemo(()=>({selectedBetMap, selectBet, isSelectedBet}),[selectedBetMap, selectBet, isSelectedBet]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};

export const useCartContext = () => useContext(CartContext);