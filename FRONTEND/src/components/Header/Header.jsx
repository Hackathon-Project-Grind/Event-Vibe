import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Import CSS file

function Header() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/home'); // Navigates to the home page
  };

  return (
    <div className="header-container">
      <h1>EventVibe</h1>
      <button className="home-button" onClick={handleGoBack}>Home</button>
      <hr />
    </div>
  );
}

export default Header;

