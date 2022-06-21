import React, { useReducer } from 'react';

export const CartContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const CartProvider = ({ children, query }) => {
  const [cart, dispatch] = useReducer(reducer, query);
  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};
