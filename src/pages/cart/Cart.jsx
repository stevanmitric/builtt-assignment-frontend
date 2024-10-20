import { notification } from 'antd';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../components/CartItem';
import './cart.css';

export const Cart = () => {
  const navigate = useNavigate();

  const productsInCart = useSelector(state => state.cart.items);

  const subTotal = useSelector(state => state.cart.subTotal);

  const grandTotal = useSelector(state => state.cart.grandTotal);

  const discount = useSelector(state => state.cart.discount);

  const handleOrder = () => {
    notification.success({
      message: 'Uspešna porudžbina.',
      description: '',
      placement: 'topRight',
      duration: 2,
    });

    navigate('/shop');
  };

  return (
    <>
      <h3 className='header'>Tvoja korpa</h3>
      <div className='cart-container'>
        <div className='cart-items'>
          {productsInCart.map(item => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>

        <div className='order-summary'>
          <div>
            <h3>Tvoja narudžbina</h3>
            <div className='summary-details'>
              <p>
                Ukupno{' '}
                <span>
                  {subTotal}
                  <sup>RSD</sup>
                </span>
              </p>
              <p>
                Ušteda{' '}
                <span>
                  - {discount}
                  <sup>RSD</sup>
                </span>
              </p>
              <p>
                Isporuka Daily Express <span>Besplatna</span>
              </p>
              <p className='summary-details-underline'></p>
              <p>
                Ukupno za uplatu{' '}
                <span>
                  {grandTotal}
                  <sup>RSD</sup>
                </span>
              </p>
              <p className='small-font'>Cena je sa uključenim PDV-om</p>
            </div>
            <button onClick={handleOrder} className='pay-btn'>
              Potvrdi porudžbinu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
