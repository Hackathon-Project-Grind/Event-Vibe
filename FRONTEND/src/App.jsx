import React from 'react';
import './App.css';

import './App.css'
import Navbar from './components/Navigation/Navbar.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListEvents from './components/ListEvents/ListEvents.jsx';

function App() {
  return (
    <Router>
      <div>

        <ListEvents />
      </div>
      </Router>
  );
}

export default App;
