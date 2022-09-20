import { configureStore } from '@reduxjs/toolkit';
import financeReducer from './reducer/finannce/financeSlice';

export function setupStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      finance: financeReducer,
    },
    preloadedState,
  });
}
