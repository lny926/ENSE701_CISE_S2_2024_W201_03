// pages/login.tsx

"use client";

import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with', email, password);
  };

  const handleRegister = () => {
    console.log('Registering with', email, password);
  };

  return (
    <div style={{
      maxWidth: '400px', 
      margin: 'auto', 
      padding: '20px', 
      backgroundColor: '#f0f0f0', // Assuming this is the background color from page.tsx
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <h1>SPEED Login</h1>
      <div style={{ marginBottom: '10px', width: '100%' }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '8px', 
            color: 'black', 
            backgroundColor: 'white', 
            border: '1px solid #ccc' 
          }}
        />
      </div>
      <div style={{ marginBottom: '10px', width: '100%' }}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '8px', 
            color: 'black', 
            backgroundColor: 'white', 
            border: '1px solid #ccc' 
          }}
        />
      </div>
      <button 
        onClick={handleLogin} 
        style={{ padding: '10px 20px', marginRight: '10px' }}>
        Login
      </button>
      <button 
        onClick={handleRegister} 
        style={{ padding: '10px 20px' }}>
        Register
      </button>
    </div>
  );
};

export default LoginPage;
