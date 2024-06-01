import React from 'react';
import './App.css';

import Register from './components/Register/Register.jsx'; 
import Login from './components/Login/Login.jsx';

//import Register from './components/Register/Register.jsx'; 
//import Login from './components/Login/Login.jsx';

import './App.css'
import Navbar from './components/Navigation/Navbar.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx'

function App() {
  return (
      <div>

        <Home/>
      </div>

  );
}

export default App;
