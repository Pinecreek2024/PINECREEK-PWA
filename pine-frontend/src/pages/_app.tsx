// src/pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import { LoyaltyProvider } from '@/context/LoyaltyContext';
import { SuperAdminProvider } from '@/context/SuperAdminContext'; // Include your SuperAdminProvider
import '../styles/globals.css'; // Ensure the path to your global styles is correct

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <LoyaltyProvider>
          <SuperAdminProvider>
            <Component {...pageProps} />
          </SuperAdminProvider>
        </LoyaltyProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default MyApp;
