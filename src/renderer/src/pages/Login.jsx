import React, { useState } from 'react'
import '../assets/styles/Login.css'
import logo from '../assets/images/logo.png'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      onLogin()
      setIsLoading(false)
    }, 1200)
  }

  return (
    <div className="login-container">
      {/* Minimal Background */}
      <div className="background-animation">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <img src={logo} alt="AVI SOFT Logo" className="logo" />
          </div>
          <h1 className="company-name">AVI SOFT</h1>
          <div className="divider"></div>
          <h2 className="system-title">Ground Control Station</h2>
          <p className="system-subtitle">Secure Access Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username" className="input-label">
              <span className="label-text">Username</span>
              <span className="label-indicator"></span>
            </label>
            <div className="input-wrapper">
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
                required
                placeholder="Enter your username"
              />
              <div className="input-border"></div>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">
              <span className="label-text">Password</span>
              <span className="label-indicator"></span>
            </label>
            <div className="input-wrapper">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
                placeholder="Enter your password"
              />
              <div className="input-border"></div>
            </div>
          </div>

          <button
            type="submit"
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            <span className="button-content">
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  <span>AUTHENTICATING</span>
                </>
              ) : (
                <>
                  <span>INITIATE LOGIN</span>
                  <span className="button-arrow">→</span>
                </>
              )}
            </span>
          </button>

          <div className="status-bar">
            <div className="status-indicator"></div>
            <span className="status-text">System Online</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
