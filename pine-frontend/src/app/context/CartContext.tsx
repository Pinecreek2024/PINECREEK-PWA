// src/app/context/CartContext.tsx
import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';

// Cart item interface
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Cart state and action types
type CartState = CartItem[];
type CartAction = 
  | { type: 'ADD_ITEM'; item: CartItem }
  | { type: 'REMOVE_ITEM'; id: number }
  | { type: 'CLEAR_CART' };

// Cart reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

// Cart context
const CartContext = createContext<{
  cart: CartState;
  dispatch: Dispatch<CartAction>;
} | undefined>(undefined);

// Cart provider component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
