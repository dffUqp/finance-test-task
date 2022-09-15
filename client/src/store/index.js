import { configureStore } from '@reduxjs/toolkit';
import finannceReducer from './reducer/financeSlice';

export function setupStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      finannce: finannceReducer,
    },
    preloadedState,
  });
}
