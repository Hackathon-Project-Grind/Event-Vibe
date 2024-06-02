import React, { useState } from "react";
import './Register.css';

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFullName = (name) => {
    return name.trim().length > 0;
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
    if (!validateFullName(fullName)) {
      newErrors.fullName = "Full name is required.";
    }
    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: fullName,
            email: email,
            password: password,
          }),
        });
        const data = await response.json();

        if (response.ok) {
          setStatusMessage("Registration successful!");
        } else {
          setStatusMessage(`Registration failed: ${data.message}`);
        }
      } catch (error) {
        console.error('Error registering user:', error);
        setStatusMessage("Registration failed: Internal server error.");
      }
    }
  };

  return (
    <div className="register-page-container">
      <div className="register-header">
        <h1 className="register-title">Welcome to EventVibe</h1>
      </div>
      <div className="register-center-container">
        <div className="register-form-container">
          <h2 className="register-subtitle">Register To Create An Account</h2>
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
              {errors.fullName && <p className="register-error">{errors.fullName}</p>}
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
          {statusMessage && <p className="register-status">{statusMessage}</p>}
          <p className="register-login-prompt">
            Already Registered? <a className="register-login-link" href="#">Click here to Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
