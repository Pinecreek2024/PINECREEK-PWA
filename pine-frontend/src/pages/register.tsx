import React from 'react';
import RegisterForm from '@/components/forms/RegisterForm';
import Link from 'next/link';

const RegisterPage: React.FC = () => {
  return (
    <div className="register-page">
      <h1>Register</h1>
      <RegisterForm />
      <p>
        Already have an account? <Link href="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default RegisterPage;
