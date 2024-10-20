import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleOpenCart = () => {
    navigate('/cart');
  };

  const handleOpenHome = () => {
    navigate('/shop');
  };

  const totalProductsInCart = useSelector(state => state.cart.totalQuantity);
  return (
    <header>
      <img
        className='logo-image'
        src='/products/logo_builtt_veci.png'
        onClick={handleOpenHome}
        alt='logo'
      />
      <button className='cart' onClick={handleOpenCart}>
        <span className='cart-count'>{totalProductsInCart}</span>
        <img src='/header/cart.png' alt='cart' />
      </button>
    </header>
  );
};
