// src/app/hooks/useWishlist.tsx
import { useContext } from 'react';
import WishlistContext from '@/components/context/WishlistContext';

interface WishlistItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }

  return context;
};

export { useWishlist };
