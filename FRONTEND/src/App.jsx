import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar.jsx';
import Register from './components/Register/Register.jsx';
import ListEvents from './components/ListEvents/ListEvents.jsx';
import Home from './components/Home/Home.jsx';
import Booknow from './components/Booknow/Booknow.jsx';
import Header from './components/Header/Header.jsx';
<<<<<<< HEAD
import Login from './components/Login/Login.jsx';
import Checkout from './components/Checkout/Checkout.jsx';

function App() {
  return (
    <div>
      <Register />
    </div>

=======
import Checkout from './components/Checkout/Checkout.jsx';
function App() {
  return (
      <div>
        <Checkout/>
      </div>
>>>>>>> d16f8787ee7a1a97fab41d894eb6f36bc51ae760
  );
}

export default App;
