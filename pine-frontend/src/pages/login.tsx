// src/pages/login.tsx
import React from 'react';
import LoginForm from '@/components/forms/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Login to Your Account</h2>
      <LoginForm />
      {/* Further logic and components for login */}
    </div>
  );
};

export default LoginPage;
