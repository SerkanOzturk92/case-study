import React from 'react';

export type InfoCellPropsType = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};
const InfoCell = ({ children, style }: InfoCellPropsType) => {
  return <td style={{ background: 'white', ...style }}>{children || ''}</td>;
};

export default InfoCell;
