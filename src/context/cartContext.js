// src/context/GlobalContext.js
import { createContext, useReducer, useContext } from 'react';

// Define your initial global state
const initialState = {
  count: 0,
  // Add more state properties as needed
};

// Define your reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    // Add more cases for other actions
    default:
      return state;
  }
};

// Create the initial context with default values
const cartContext = createContext();

// Create a custom hook to use the global state and dispatcher
export const useCartContext = () => {
  return useContext(cartContext);
};

// Create a provider component that will wrap your application
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Value to be provided to consumers of this context
  const contextValue = { state, dispatch };

  return <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>;
};

export { cartContext, CartProvider };
