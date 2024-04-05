// src/app/components/features/LoyaltyProgram.tsx
import React from 'react';
import useLoyalty from '@/hooks/useLoyalty';

const LoyaltyProgram: React.FC = () => {
  const { loyaltyPoints, earnPoints, redeemPoints } = useLoyalty();

  return (
    <div className="loyalty-program">
      <h2>Your Loyalty Points: {loyaltyPoints}</h2>
      <button onClick={() => earnPoints(10)}>Earn 10 Points</button>
      <button onClick={() => redeemPoints(10)} disabled={loyaltyPoints < 10}>Redeem 10 Points</button>
      {/* Additional UI and functionality */}
    </div>
  );
};

export default LoyaltyProgram;
