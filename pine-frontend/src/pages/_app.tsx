// src/pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/components/context/AuthContext';
import { CartProvider } from '@/components/context/CartContext';
import { LoyaltyProvider } from '@/components/context/LoyaltyContext';
import '@/styles/globals.css'; // Global styles

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Wraps all components in the application with the specified context providers
  // This is the place to add any additional context providers if necessary
  return (
    <AuthProvider> {/* Provides authentication context */}
      <CartProvider> {/* Provides shopping cart context */}
        <LoyaltyProvider> {/* Provides loyalty program context */}
          <Component {...pageProps} /> {/* Renders the current page */}
        </LoyaltyProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default MyApp;
