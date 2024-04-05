import React from 'react';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/AuthContext'; // Context for authentication
import { CartProvider } from '@/context/CartContext'; // Context for shopping cart
import { LoyaltyProvider } from '@/context/LoyaltyContext'; // Context for loyalty program
import { SuperAdminProvider } from '@/context/SuperAdminContext'; // Context for super admin functionalities
import '../styles/globals.css'; // Global styles

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider> {/* Wrap with AuthProvider */}
      <CartProvider> {/* Wrap with CartProvider */}
        <LoyaltyProvider> {/* Wrap with LoyaltyProvider */}
          <SuperAdminProvider> {/* Wrap with SuperAdminProvider */}
            <Component {...pageProps} /> {/* Render the current page */}
          </SuperAdminProvider>
        </LoyaltyProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default MyApp;
