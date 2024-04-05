// src/app/components/forms/RegisterForm.tsx
import React, { useState } from 'react';
import apiService from '@/services/apiService';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    try {
      // Adjust the endpoint as per your Django backend
      const response = await apiService.post('auth/register/', { username, email, password });
      console.log('Registration successful:', response);
      // Handle actions post successful registration, like redirecting to the login page
    } catch (err) {
      setError('Failed to register. Please try again.');
      // Handle specific errors based on your backend response
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      {error && <p className="error">{error}</p>}
      <div>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
