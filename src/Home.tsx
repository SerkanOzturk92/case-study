import React, { useEffect, useState } from 'react';
import { getBets } from './api/bets';
import Table from './components/Table';
import Cart from './components/Cart';

const Home = () => {
  const [bets, setBets] = useState<any>([]);
  useEffect(() => {
    getBets().then((resp) => {
      setBets(resp);
    });
  }, []);

  return (
    <>
      <Table bets={bets}></Table>
      <Cart/>
    </>
  );
};

export default Home;
