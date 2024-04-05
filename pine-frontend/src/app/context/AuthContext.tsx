// src/app/context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  // Include other user fields as necessary
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

interface AuthContextType {
  authState: AuthState;
  login: (userDetails: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    user: null,
  });

  const login = (userDetails: User) => {
    setAuthState({ isLoggedIn: true, user: userDetails });
  };

  const logout = () => {
    setAuthState({ isLoggedIn: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
