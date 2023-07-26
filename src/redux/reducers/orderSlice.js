import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    setOrderData: (state, action) => action.payload,
  },
});

export const { setOrderData } = orderSlice.actions;
export default orderSlice.reducer;