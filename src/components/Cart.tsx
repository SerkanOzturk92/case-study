import { useCartContext } from '../context/cartContext';

const Cart = () => {
  const { selectedBetMap } = useCartContext();

  const dataLength = Object.keys(selectedBetMap).length;

  const getTotal=()=> {
    return '0 TL';
  }

  const styles = {
    position: 'fixed',
    display: 'block',
    right: 0,
    bottom: 0,
    width: '400px',
    height: 'min-content',
    zIndex: 1,
    background: 'white',
    border: '1px solid black',
  }
  return (
    <div style={styles}>
      {dataLength > 0 && (
        <div style={{ margin: '20px', borderBottom: '1px solid gray' }}></div>
      )}

      <div style={{ margin: '20px' }}> Toplam Tutar: {getTotal()}</div>
    </div>
  );
}

export default Cart;