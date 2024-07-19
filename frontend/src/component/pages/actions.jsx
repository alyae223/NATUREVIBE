// actions.js
export const SET_CART = 'SET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const LIKE_PRODUCT = 'LIKE_PRODUCT'; // New action type

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const deleteFromCart = (itemId) => ({
  type: DELETE_FROM_CART,
  payload: itemId,
});

export const likeProduct = (item) => ({ // New action creator
  type: LIKE_PRODUCT,
  payload: item,
});
