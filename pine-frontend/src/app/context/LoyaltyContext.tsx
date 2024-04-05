// src/app/context/LoyaltyContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface LoyaltyContextType {
  loyaltyPoints: number;
  earnPoints: (amount: number) => void;
  redeemPoints: (amount: number) => void;
}

const LoyaltyContext = createContext<LoyaltyContextType | undefined>(undefined);

interface LoyaltyProviderProps {
  children: ReactNode;
}

export const LoyaltyProvider: React.FC<LoyaltyProviderProps> = ({ children }) => {
  const [loyaltyPoints, setLoyaltyPoints] = useState<number>(0);

  const earnPoints = (amount: number) => {
    setLoyaltyPoints(prevPoints => prevPoints + amount);
  };

  const redeemPoints = (amount: number) => {
    setLoyaltyPoints(prevPoints => Math.max(0, prevPoints - amount));
  };

  return (
    <LoyaltyContext.Provider value={{ loyaltyPoints, earnPoints, redeemPoints }}>
      {children}
    </LoyaltyContext.Provider>
  );
};

export default LoyaltyContext;
