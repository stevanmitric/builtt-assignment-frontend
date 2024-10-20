import { notification } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import {
  decrementItem,
  incrementItem,
  removeFromCart,
} from '../redux/actions/cart.actions';

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const productInCart = cartItems.find(item => item.id === product.id);

  const quantity = productInCart ? productInCart.quantity : 0;

  const handleProductIncrement = () => {
    dispatch(incrementItem(product));
  };

  const handleProductDecrement = () => {
    dispatch(decrementItem(product));
  };

  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product));
    notification.success({
      message: 'Uspešno ste uklonili proizvod iz korpe',
      description: '',
      placement: 'topRight',
      duration: 2,
    });
  };

  return (
    <div key={product.id} className='cart-item'>
      <img src={product.image} alt={product.title} className='item-image' />

      <div className='cart-item-info'>
        <p className='cart-item-title'>{product.title}</p>
        <p className='cart-item-weight'>{product.weight}</p>

        <div className='cart-item-controls'>
          <div className='quantity-controls-cart'>
            <button
              className='quantity-button-cart'
              onClick={handleProductDecrement}
            >
              {/* Decrement SVG */}
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

            <span>{quantity}</span>

            <button
              className='quantity-button-cart'
              onClick={handleProductIncrement}
            >
              {/* Increment SVG */}
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

          <button onClick={handleRemoveProduct} className='remove-button-cart'>
            Ukloni
          </button>
        </div>
      </div>

      <div className='cart-item-prices'>
        <p className='cart-item-current-price'>
          {product.currentPrice} <sup>RSD</sup>
        </p>
        {product.oldPrice && (
          <p className='cart-item-old-price'>
            {product.oldPrice} <sup>RSD</sup>
          </p>
        )}
      </div>
    </div>
  );
};
