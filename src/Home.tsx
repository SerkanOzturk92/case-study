import React, { useEffect } from 'react';
import { getBets } from './api/bets';
import Table from './components/Table/Table';
import Cart from './components/Cart/Cart';
import { useBetProvider } from './context/Bet';

const Home = () => {
  const { bets, setBets } = useBetProvider();

  useEffect(() => {
    getBets().then((resp) => {
      setBets(resp);
    });
  }, []);

  return (
    <>
      <Table bets={bets}></Table>
      <Cart />
    </>
  );
};

export default Home;
