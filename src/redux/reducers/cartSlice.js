// src/redux/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  // Add more state properties as needed
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    // Add more reducers for other actions
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
