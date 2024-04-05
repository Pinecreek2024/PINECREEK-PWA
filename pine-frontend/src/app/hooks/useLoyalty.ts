// src/app/hooks/useLoyalty.ts
import { useContext } from 'react';
import LoyaltyContext from '@/context/LoyaltyContext';

const useLoyalty = () => {
  const context = useContext(LoyaltyContext);
  if (!context) {
    throw new Error('useLoyalty must be used within a LoyaltyProvider');
  }
  return context;
};

export default useLoyalty;
