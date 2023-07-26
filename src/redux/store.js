
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsSlice';
import counterReducer from './reducers/cartSlice';
import orderReducer from './reducers/orderSlice';

const store = configureStore({
  reducer: {
        products: productsReducer,
    counter: counterReducer,
    order: orderReducer,
  },
});

export default store;
