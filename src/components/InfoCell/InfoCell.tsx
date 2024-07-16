import React from 'react';
import CellHeader from '../CellHeader/CellHeader';
import './InfoCell.scss';

export type InfoCellPropsType = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  cellHeader?: string;
};
const InfoCell = ({ children, style, cellHeader }: InfoCellPropsType) => {
  return (
    <td className="info-cell" style={{ ...style }}>
      <div className="info-cell-container">
        <CellHeader headerText={cellHeader}></CellHeader>
        <div className="info-cell-body">{children || ''}</div>
      </div>
    </td>
  );
};

export default InfoCell;
