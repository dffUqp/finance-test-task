import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  connect: false,
};

export const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setConnect: (state, action) => {
      state.connect = action.payload;
    },
    setData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { setConnect, setData } = financeSlice.actions;
export default financeSlice.reducer;
