// src/pages/register.tsx
import React from 'react';
import RegisterForm from '@/components/forms/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Create an Account</h2>
      <RegisterForm />
      {/* Additional components or steps for account creation */}
    </div>
  );
};

export default RegisterPage;
