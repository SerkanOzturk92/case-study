import React from 'react';

const CellHeader = ({headerText}: {headerText?: string}) => {

  return (<div
    style={{
      height: '20px',
      borderBottom: '1px solid black',
      lineHeight: '20px',
      padding: '0 10px',
      whiteSpace: 'nowrap'
    }}>
    {headerText || ''}
  </div>)
}

export default CellHeader;