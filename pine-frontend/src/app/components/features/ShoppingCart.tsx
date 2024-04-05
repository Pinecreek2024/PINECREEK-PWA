// src/app/components/features/ShoppingCart.tsx
import React from 'react';
import { useCart } from '@/hooks/useCart';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const { cart, dispatch } = useCart();

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item: CartItem) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price.toFixed(2)}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Additional cart functionality */}
    </div>
  );
};

export default ShoppingCart;
