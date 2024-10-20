import {
  CLEAR_CART,
  DECREMENT_ITEM,
  INCREMENT_ITEM,
  REMOVE_FROM_CART,
} from '../constants/actionTypes';

const initialState = {
  items: [],
  totalQuantity: 0,
  subTotal: 0,
  discount: 0, // You can add logic to calculate this
  grandTotal: 0,
};

const calculateSubtotal = items => {
  return items.reduce(
    (acc, item) => acc + item.currentPrice * item.quantity,
    0
  );
};

const calculateDiscount = items => {
  return items.reduce(
    (acc, item) => acc + (item.oldPrice - item.currentPrice) * item.quantity,
    0
  );
};

const calculateGrandTotal = (subTotal, discount) => {
  return subTotal - discount;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ITEM: {
      const existingProductIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      let updatedItems;
      if (existingProductIndex !== -1) {
        updatedItems = state.items.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      const subTotal = calculateSubtotal(updatedItems);
      const discount = calculateDiscount(updatedItems); // Assuming discount is already set, or you can recalculate it here
      const grandTotal = calculateGrandTotal(subTotal, discount);

      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity + 1, // Increment total quantity
        subTotal,
        discount,
        grandTotal,
      };
    }

    case DECREMENT_ITEM: {
      const existingProductIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const currentQuantity = state.items[existingProductIndex].quantity;

        let updatedItems;
        if (currentQuantity > 1) {
          updatedItems = state.items.map((item, index) =>
            index === existingProductIndex
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          updatedItems = state.items.filter(
            item => item.id !== action.payload.id
          );
        }

        const subTotal = calculateSubtotal(updatedItems);
        const discount = calculateDiscount(updatedItems); // Assuming discount logic stays the same
        const grandTotal = calculateGrandTotal(subTotal, discount);

        return {
          ...state,
          items: updatedItems,
          totalQuantity: state.totalQuantity - 1, // Decrement total quantity
          subTotal,
          discount,
          grandTotal,
        };
      }

      return state;
    }

    case REMOVE_FROM_CART: {
      const productToRemove = state.items.find(
        item => item.id === action.payload.id
      );

      if (productToRemove) {
        const updatedItems = state.items.filter(
          item => item.id !== action.payload.id
        );

        const subTotal = calculateSubtotal(updatedItems);
        const discount = calculateDiscount(updatedItems); // Assuming discount logic stays the same
        const grandTotal = calculateGrandTotal(subTotal, discount);

        return {
          ...state,
          items: updatedItems,
          totalQuantity: state.totalQuantity - productToRemove.quantity, // Adjust total quantity
          subTotal,
          discount,
          grandTotal,
        };
      }

      return state;
    }

    case CLEAR_CART:
      return {
        ...state,
        items: [],
        totalQuantity: 0, // Reset total quantity
        subTotal: 0,
        discount: 0,
        grandTotal: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
