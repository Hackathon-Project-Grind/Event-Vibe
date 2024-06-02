import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: fullName, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatusMessage('Registration successful!');
          setErrors({});
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          setStatusMessage(`Registration failed: ${data.message}`);
        }
      } catch (error) {
        console.error('Error registering user:', error);
        setStatusMessage('Registration failed: Internal server error.');
      }
    }
  };

  return (
    <div className="register-page-container">
      <div className="register-header">
        <h1 className="register-title">Welcome to EventVibe</h1>
      </div>
      <h2 className="register-subtitle">Register To Create An Account</h2>
      <div className="register-center-container">
        <div className="register-form-container">
          
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-input-group">
              <label className="register-label" htmlFor="email">Email:</label>
              <input
                className="register-input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              {errors.email && <p className="register-error">{errors.email}</p>}
            </div>
            <div className="register-input-group">
              <label className="register-label" htmlFor="fullName">Full Name:</label>
              <input
                className="register-input"
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="register-input-group">
              <label className="register-label" htmlFor="password">Password:</label>
              <input
                className="register-input"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              {errors.password && <p className="register-error">{errors.password}</p>}
            </div>
            <button className="register-button" type="submit">Register</button>
          </form>
          {statusMessage && <p className={`register-status ${statusMessage.includes('successful') ? 'success' : 'error'}`}>{statusMessage}</p>}
          <p className="register-login-prompt">
            Already have an account?{' '}
            <a className="register-login-link" href="#" onClick={() => navigate('/')}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
