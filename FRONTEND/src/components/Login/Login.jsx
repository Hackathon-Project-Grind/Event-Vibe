import React, { useState } from 'react';
import './Login.css'; // Make sure to import your CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Minimum 6 characters for the password
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Login successful
          setStatusMessage('Login successful!');
          setErrors({});
          // Redirect to home page
          setTimeout(() => {
            window.location.href = '/home';
          }, 2000); // Redirect after 2 seconds
        } else {
          // Login failed
          setStatusMessage(`Login failed: ${data.message}`);
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setStatusMessage('Login failed: Internal server error.');
      }
    }
  };

  return (
    <>
      <div className="login-header">
        <h1 className="login-title">Welcome to EventVibe</h1>
      </div>
      <div className="login-container">
        <div className="login-form-container">
          <h2 className="login-subtitle">Login to Proceed</h2>
          <p className="login-description">Enter your email and password to login</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-input-group">
              <label className="login-label" htmlFor="email">Email:</label>
              <input
                className="login-input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              {errors.email && <p className="login-error">{errors.email}</p>}
            </div>
            <div className="login-input-group">
              <label className="login-label" htmlFor="password">Password:</label>
              <input
                className="login-input"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              {errors.password && <p className="login-error">{errors.password}</p>}
            </div>
            <button className="login-button" type="submit">Login</button>
          </form>
          {statusMessage && <p className={`login-status ${statusMessage.includes('successful') ? 'success' : 'error'}`}>{statusMessage}</p>}
          <p className="login-register-prompt">New user? <a className="login-register-link" href="#">Click Here To Register</a></p>
        </div>
      </div>
    </>
  );
}

export default Login;
