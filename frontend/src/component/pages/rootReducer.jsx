// rootReducer.js

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
// import other reducers if you have them

const rootReducer = combineReducers({
  cartReducer, // This is the name under which the cartReducer state will be stored in the Redux store
  // Add other reducers here if needed
});

export default rootReducer;
