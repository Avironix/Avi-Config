import React, { useState } from 'react';
import { THEME } from '../theme';
import '../assets/styles/Login.css';
import logo from "../assets/images/logo.png"


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img 
            src={logo} 
            alt="AVI Soft Logo" 
            className="logo"
          />
        </div>
        <h1 className="company-name">AVI SOFT</h1>
        <p className="subtitle">Ground Control Station</p>
        <form onSubmit={handleSubmit} className="login-form">
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={e => setUsername(e.target.value)}
            className="input-field"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;