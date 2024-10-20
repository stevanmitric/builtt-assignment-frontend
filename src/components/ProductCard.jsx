import { notification } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { decrementItem, incrementItem } from '../redux/actions/cart.actions';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const productInCart = cartItems.find(item => item.id === product.id);

  const quantity = productInCart ? productInCart.quantity : 0;

  const handleProductIncrement = () => {
    dispatch(incrementItem(product));

    notification.success({
      message: 'Uspešno ste dodali proizvod u korpu',
      description: '',
      placement: 'topRight',
      duration: 2,
    });
  };

  const handleProductDecrement = () => {
    dispatch(decrementItem(product));
  };

  return (
    <div className='product-card'>
      <div className='image-container'>
        <img
          src={product.image}
          alt='Product Title'
          className='product-image'
        />
        <div className='controls-container'>
          <div className='quantity-controls'>
            <button onClick={handleProductDecrement} className='quantity-btn'>
              <svg
                width='15'
                height='16'
                viewBox='0 0 15 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_8_64)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.6304 8.66502H0V7.33499H14.6304V8.66502Z'
                    fill='black'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_8_64'>
                    <rect
                      width='14.6304'
                      height='14.6304'
                      fill='white'
                      transform='translate(0 0.684814)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <span className='quantity'>{quantity}</span>
            <button onClick={handleProductIncrement} className='quantity-btn'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_8_67)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M15.2607 8.66502H0.630371V7.33499H15.2607V8.66502Z'
                    fill='black'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7.28056 15.3152L7.28056 0.684814L8.6106 0.684814L8.6106 15.3152L7.28056 15.3152Z'
                    fill='black'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_8_67'>
                    <rect
                      width='14.6304'
                      height='14.6304'
                      fill='white'
                      transform='translate(0.630371 0.684814)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className='cart-icon'>
            <img src='/products/cart.png' alt='light cart icon' />
          </div>
        </div>
      </div>
      <h3 className='product-title'>{product.title}</h3>
      <p className='product-price'>
        {product.currentPrice}
        <sup>RSD</sup>
      </p>
    </div>
  );
};
