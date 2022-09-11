import { configureStore } from '@reduxjs/toolkit';
import finannceReducer from './reducer/financeSlice';

export default configureStore({
  reducer: {
    finannce: finannceReducer,
  },
});
