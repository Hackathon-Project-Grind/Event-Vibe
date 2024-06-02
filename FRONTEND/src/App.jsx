import React from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListEvents from './components/ListEvents/ListEvents.jsx';
import Home from './components/Home/Home.jsx'
import Booknow from './components/Booknow/Booknow.jsx';
import Header from './components/Header/Header.jsx';
function App() {
  return (
      <div>
        <Header/>
        <Booknow/>
        
      </div>
  );
}

export default App;
