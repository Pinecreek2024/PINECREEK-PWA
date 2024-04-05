// src/app/components/forms/LoginForm.tsx
import React, { useState } from 'react';
import apiService from '@/services/apiService'; // Import your API service

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(''); // Reset error message

    try {
      // Replace the URL with your Django login endpoint
      const response = await apiService.post('auth/login/', { username, password });
      // Handle the response, such as saving the token and updating the auth state
      console.log('Login successful:', response);
      // Redirect to another page or perform additional actions on successful login
    } catch (err) {
      // Handle errors, such as displaying login failure messages
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {error && <p className="error">{error}</p>}
      <div>
        <label htmlFor="username">Username or Email</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
