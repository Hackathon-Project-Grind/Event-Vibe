import React, { useState } from 'react';
import './Login.css'; // Make sure to import your CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        setError('');
        console.log(data.message);
        // Redirect user to dashboard or another page
      } else {
        // Login failed
        setError(data.message);
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Internal server error');
    }
  };

  return (
    <>
      <div className="header">
        <h1>Welcome to EventVibe</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Login to Proceed</h2>
          <p>Enter your email and password to login</p>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
          <p className="register-link">New user? <a href="#">Click Here To Register</a></p>
        </form>
      </div>
    </>
  );
}

export default Login;
