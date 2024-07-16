import React from 'react';
import './CellHeader.scss';

const CellHeader = ({ headerText }: { headerText?: string }) => {
  return <div className="cell-header">{headerText || ''}</div>;
};

export default CellHeader;
