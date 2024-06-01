import React from 'react';
import './App.css';

import Register from './components/Register/Register.jsx'; 
import Login from './components/Login/Login.jsx';

//import Register from './components/Register/Register.jsx'; 
//import Login from './components/Login/Login.jsx';

import './App.css'
import Navbar from './components/Navigation/Navbar.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div>

        <Login />
      </div>

  );
}

export default App;
