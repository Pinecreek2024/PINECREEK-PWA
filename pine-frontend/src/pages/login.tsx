import React from 'react';
import LoginForm from '@/components/forms/LoginForm';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm />
      <p>
        Don't have an account? <Link href="/register">Register here</Link>.
      </p>
      <p>
        Forgot password? <Link href="/reset-password">Reset it here</Link>.
      </p>
    </div>
  );
};

export default LoginPage;
