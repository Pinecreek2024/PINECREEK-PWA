// src/app/components/features/Wishlist.tsx
import React from 'react';
import { useWishlist } from '@/hooks/useWishList';
import { useCart } from '@/hooks/useCart'; // Import useCart hook if adding to cart is required

interface WishlistItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  const handleRemoveFromWishlist = (id: number) => {
    removeFromWishlist(id);
  };

  const handleAddToCart = (item: WishlistItem) => {
    cartDispatch({ type: 'ADD_ITEM', item: { ...item, quantity: 1 } });
    removeFromWishlist(item.id);
  };

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              <button onClick={() => handleRemoveFromWishlist(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
