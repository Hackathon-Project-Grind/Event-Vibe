import React, { useState } from "react";
import './Register.css';

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
    console.log("Full Name:", fullName);
    console.log("Password:", password);
  };

  return (
    <div className="page-container">
      <div className="header">
        <h1>Welcome to EventVibe</h1>
      </div>
      <div className="registration-form">
        <h2>Register To Create An Account</h2>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
          <button type="submit">Register</button>
        </form>
        <p>
          Already Registered?{" "}
          <a href="#">click here to Login</a>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
