"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleAdminLogin = async () => {
    // Redirect to /admindashboard.tsx regardless of backend response
    router.push('/admindashboard'); 
  };

  return (
    <div style={{
      maxWidth: '400px', 
      margin: 'auto', 
      padding: '20px', 
      backgroundColor: '#f0f0f0',
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <h1>SPEED Admin Login</h1>
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
      <button onClick={handleAdminLogin} style={{ padding: '10px 20px', marginRight: '10px' }}>
        Login
      </button>
    </div>
  );
};

export default AdminLoginPage;
