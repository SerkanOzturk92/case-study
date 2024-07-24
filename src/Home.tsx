import React, { useContext, useEffect, useMemo } from 'react';
import { getBets } from './api/bets';
import Table from './components/Table/Table';
import Cart from './components/Cart/Cart';
import { useBetProvider } from './context/Bet';
import { ThemeContext } from './context/Theme/themeContext';

const Home = () => {
  const { bets, setBets } = useBetProvider();
  const { nextTheme, getBGColor } = useContext(ThemeContext);

  useEffect(() => {
    getBets().then((resp) => {
      setBets(resp);
    });
  }, []);

  return (
    <div style={{ backgroundColor: getBGColor() }}>
      <div>
        <button onClick={nextTheme}>NextTheme</button>
      </div>
      <Table bets={bets}></Table>
      <Cart />
    </div>
  );
};

export default Home;
