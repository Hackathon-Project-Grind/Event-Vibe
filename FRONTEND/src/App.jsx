import React from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListEvents from './components/ListEvents/ListEvents.jsx';
import Home from './components/Home/Home.jsx'

function App() {
  return (
      <div>

        <Home/>
        
      </div>
  );
}

export default App;
