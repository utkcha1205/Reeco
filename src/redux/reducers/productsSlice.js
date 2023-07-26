
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', status: 'Pending' },
    { id: 2, name: 'Product 2', status: 'Pending' },
    
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    approveProduct: (state, action) => {
      const { productId } = action.payload;
      state.products = state.products.map((product) =>
        product.id === productId ? { ...product, status: 'Approved' } : product
      );
    },
    markMissing: (state, action) => {
      const { productId, urgent } = action.payload;
      const status = urgent ? 'Missing - Urgent' : 'Missing';
      state.products = state.products.map((product) =>
        product.id === productId ? { ...product, status } : product
      );
    },
  },
});

export const { approveProduct, markMissing } = productsSlice.actions;
export default productsSlice.reducer;
