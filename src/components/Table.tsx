import { TableVirtuoso } from 'react-virtuoso';
import { TABLE_HEADER_LIST } from '../utils/constants';
import React from 'react';
import InfoCell from './InfoCell';
import BetCell from './BetCell/BetCell';

type TablePropsType = {
  bets: any;
};

const BetItem = ({ bet }: any) => {
  return (
    <>
      <InfoCell
        style={{ width: 400, position: 'sticky', left: 0, textAlign: 'left' }}
        cellHeader={`${bet.D} ${bet.DAY} ${bet.LN}`}>
        <div style={{width: '100%'}}>
          <strong style={{ marginRight: 6 }}>{bet.C}</strong>
          <span>
            {bet.T} {bet.N}
          </span>
        </div>
      </InfoCell>
      <InfoCell cellHeader={'Yorumlar'}>Yorumlar</InfoCell>
      <InfoCell cellHeader={''}>{bet.MBS}</InfoCell>
      <BetCell cellHeader={'1'} bet={bet} valueKey={'OCG[1].OC[0].O'}></BetCell>
      <BetCell cellHeader={'X'} bet={bet} valueKey={'OCG[1].OC[1].O'}></BetCell>
      <InfoCell cellHeader={'2'}></InfoCell>
      <BetCell cellHeader={'Alt'} bet={bet} valueKey={'OCG[5].OC[25].O'}></BetCell>
      <BetCell cellHeader={'Üst'} bet={bet} valueKey={'OCG[5].OC[26].O'}></BetCell>
      <InfoCell cellHeader={'H1'}></InfoCell>
      <InfoCell cellHeader={'1'}></InfoCell>
      <InfoCell cellHeader={'X'}></InfoCell>
      <InfoCell cellHeader={'2'}></InfoCell>
      <InfoCell cellHeader={'H-2'}></InfoCell>
      <BetCell cellHeader={'1-X'} bet={bet} valueKey={'OCG[2].OC[3].O'}></BetCell>
      <BetCell cellHeader={'1-2'} bet={bet} valueKey={'OCG[2].OC[4].O'}></BetCell>
      <BetCell cellHeader={'X-2'} bet={bet} valueKey={'OCG[2].OC[5].O'}></BetCell>
      <InfoCell cellHeader={'Var'}></InfoCell>
      <InfoCell cellHeader={'Yok'}></InfoCell>
      <InfoCell cellHeader={'99+'}></InfoCell>
    </>
  );
};

const Table = ({ bets }: TablePropsType) => {
  return (
    <TableVirtuoso
      style={{ height: '100vh', width: '100%', position: 'relative' }}
      data={bets}
      components={{
        Table: ({ style, ...props }) => (
          <table
            {...props}
            style={{ ...style, width: '100%', minWidth: '1200px', userSelect: 'none' }}
          />
        )
      }}
      fixedHeaderContent={() => (
        <tr>
          <th
            style={{
              background: 'lightgray',
              border: '1px solid black',
              position: 'sticky',
              left: 0,
              zIndex: 1,
              minWidth: '400px',
              height: '50px'
            }}>
            Event Count: {bets.length}
          </th>
          {TABLE_HEADER_LIST.map((th, i) => (
            <th
              key={`${th}-${i}`}
              style={{ background: 'lightgray', border: '1px solid black', minWidth: 80 }}>
              {th}
            </th>
          ))}
        </tr>
      )}
      itemContent={(i, bet) => <BetItem bet={bet} />}
    />
  );
};

export default Table;
