import { SET_CART, ADD_TO_CART, DELETE_FROM_CART, LIKE_PRODUCT } from './actions';

const initialState = {
  cart: [],
  likedProducts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case ADD_TO_CART:
      const existingCartItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingCartItemIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }

    case DELETE_FROM_CART:
      const filteredCart = state.cart.filter(item => item.id !== action.payload);
      return { ...state, cart: filteredCart };

    case LIKE_PRODUCT:
      const existingLikedItemIndex = state.likedProducts.findIndex(item => item.id === action.payload.id);
      if (existingLikedItemIndex !== -1) {
        const updatedLikedProducts = [...state.likedProducts];
        updatedLikedProducts[existingLikedItemIndex].quantity += 1;
        return { ...state, likedProducts: updatedLikedProducts };
      } else {
        return { ...state, likedProducts: [...state.likedProducts, { ...action.payload, quantity: 1 }] };
      }

    default:
      return state;
  }
};

export default cartReducer;
