import React, { useState } from "react";
import './Register.css';

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      console.log(data);
      // Handle response, maybe show a success message to the user
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error, maybe show an error message to the user
    }
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
