import React from 'react';

export type InfoCellPropsType = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  cellHeader?: string;
};
const InfoCell = ({ children, style, cellHeader }: InfoCellPropsType) => {
  const styles = {
    background: 'white',
    display: 'flex',
    flexDirection: 'column'
  } as React.CSSProperties;

  return (
    <td style={{ border: '1px solid black', textAlign: 'center', ...style }}>
      <div style={styles}>
        <div
          style={{
            height: '20px',
            borderBottom: '1px solid black',
            lineHeight: '20px',
            padding: '0 10px',
            whiteSpace: 'nowrap'
          }}>
          {cellHeader}
        </div>
        <div
          style={{
            height: 50,
            lineHeight: '30px',
            padding: '0 10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          {children || ''}
        </div>
      </div>
    </td>
  );
};

export default InfoCell;
