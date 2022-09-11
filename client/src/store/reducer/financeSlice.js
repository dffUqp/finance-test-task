import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  connect: false,
};

export const finannceSlice = createSlice({
  name: 'finannce',
  initialState,
  reducers: {
    setConnect: (state, action) => {
      state.connect = action.payload;
    },
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setConnect, getData } = finannceSlice.actions;
export default finannceSlice.reducer;
