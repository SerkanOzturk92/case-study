import React from 'react';
import Table from './components/Table/Table';
import Cart from './components/Cart/Cart';
import useFetchBets from './hooks/useFetchBets';

const Home = () => {
  const { isLoading, isError, data } = useFetchBets();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error Occurred</div>;

  return (
    <>
      <Table bets={data}></Table>
      <Cart />
    </>
  );
};

export default Home;
