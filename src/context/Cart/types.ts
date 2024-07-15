export type CartContextProps = {
  selectedBetMap: SelectedBetMap;
  selectBet: (rowId: RowId, colId?: ColId)=>void;
  isSelectedBet: (rowId: RowId, colId: ColId)=>boolean;
};

export type RowId = string;
export type ColId = string;

export type SelectedBetMap = Record<RowId, ColId>;