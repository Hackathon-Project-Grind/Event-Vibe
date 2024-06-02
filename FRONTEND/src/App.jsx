import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar.jsx';
import ListEvents from './components/ListEvents/ListEvents.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import RegistrationForm from './components/Register/Register.jsx';
import Booknow from './components/Booknow/Booknow.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Header from './components/Header/Header.jsx';

function ConditionalNavbar({ isLoggedIn, onLogout }) {
  const location = useLocation();
  const hideNavbarPaths = ['/checkout'];

  if (hideNavbarPaths.includes(location.pathname)) {
    return null;
  }

  return isLoggedIn ? <Navbar onLogout={onLogout} /> : null;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <ConditionalNavbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/listevents" element={isLoggedIn ? <><ListEvents /></> : <Navigate to="/" />} />
          <Route path="/booknow" element={isLoggedIn ? <><Header /><Booknow /></> : <Navigate to="/" />} />
          <Route path="/checkout" element={isLoggedIn ? <><Checkout /></> : <Navigate to="/" />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
