import React, { useState } from 'react';
import './Login.css'; // Make sure to import your CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
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
          <p className="register-link">New user? <a href="#">Click Here To Register</a></p>
        </form>
      </div>
    </>
  );
}

export default Login;
