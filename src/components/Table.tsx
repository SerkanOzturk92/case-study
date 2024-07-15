import { TableVirtuoso } from 'react-virtuoso';
import { TABLE_HEADER_LIST } from '../utils/constants';
import React from 'react';
import InfoCell from './InfoCell';
import BetCell from './BetCell';

type TablePropsType = {
  bets: any;
}

const BetItem = ({ bet }: any) => {
  return (
    <>
      <InfoCell
        style={{
          background: 'white',
          position: 'sticky',
          left: 0
        }}>{`${bet.D} ${bet.DAY} ${bet.LN}`}</InfoCell>
      {TABLE_HEADER_LIST.map((item) => {
        return <InfoCell>{item}</InfoCell>;
      })}
    </>
  );
};

const BetItem2 = ({ bet }: any) => {
  return (
    <>
      <InfoCell
        style={{
          background: 'white',
          position: 'sticky',
          left: 0
        }}>
        <strong>{bet.C}</strong>
        {` ${bet.T} ${bet.N}`}
      </InfoCell>
      <InfoCell>Yorumlar</InfoCell>
      <InfoCell>{bet.MBS}</InfoCell>
      <BetCell bet={bet} valueKey={'OCG[1].OC[0].O'}></BetCell>
      <BetCell bet={bet} valueKey={'OCG[1].OC[1].O'}></BetCell>
      <InfoCell></InfoCell>
      <BetCell bet={bet} valueKey={'OCG[5].OC[25].O'}></BetCell>
      <BetCell bet={bet} valueKey={'OCG[5].OC[26].O'}></BetCell>
      <InfoCell></InfoCell>
      <InfoCell></InfoCell>
      <InfoCell></InfoCell>
      <InfoCell></InfoCell>
      <InfoCell></InfoCell>
      <BetCell bet={bet} valueKey={'OCG[2].OC[3].O'}></BetCell>
      <BetCell bet={bet} valueKey={'OCG[2].OC[4].O'}></BetCell>
      <BetCell bet={bet} valueKey={'OCG[2].OC[5].O'}></BetCell>
      <InfoCell></InfoCell>
      <InfoCell></InfoCell>
      <InfoCell></InfoCell>
    </>
  );
};

const Table = ({bets}: TablePropsType) => {
  return (
    <TableVirtuoso
      style={{ height: '100vh', width: '100%', position: 'relative' }}
      data={bets}
      components={{
        Table: ({ style, ...props }) => (
          <table
            {...props}
            style={{ ...style, width: '100%', minWidth: '1200px', userSelect: 'none'}}
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
              zIndex: 1
            }}>
            Event Count: {bets.length}
          </th>
          {TABLE_HEADER_LIST.map((th, i) => (
            <th key={`${th}-${i}`} style={{ background: 'lightgray', border: '1px solid black' }}>
              {th}
            </th>
          ))}
        </tr>
      )}
      itemContent={(i, bet) => <BetItem2 bet={bet}></BetItem2>}
    />
  )
}

export default Table;