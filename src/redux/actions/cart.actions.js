import {
  CLEAR_CART,
  DECREMENT_ITEM,
  INCREMENT_ITEM,
  REMOVE_FROM_CART,
} from '../constants/actionTypes';
// Increment item in the cart. It passes the whole item object as payload.
export const incrementItem = item => ({
  type: INCREMENT_ITEM,
  payload: item, // The product object is passed (id, name, etc.)
});

// Decrement item in the cart. It passes the whole item object as payload.
export const decrementItem = item => ({
  type: DECREMENT_ITEM,
  payload: item, // The product object is passed (id, name, etc.)
});

// Remove an item from the cart. Pass only the product id.
export const removeFromCart = item => ({
  type: REMOVE_FROM_CART,
  payload: item, // Make sure this is an object containing the id
});

// Clear the cart. No payload needed.
export const clearCart = () => ({
  type: CLEAR_CART,
});
