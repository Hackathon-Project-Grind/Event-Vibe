import React from 'react';
import './App.css';

import './App.css'
import Navbar from './components/Navigation/Navbar.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import ListEvents from './components/ListEvents/ListEvents.jsx';
=======
import Home from './components/Home/Home.jsx'
>>>>>>> 47dbffd569aafe6b9a83e152f3980593d9eaf2cd

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD

        <ListEvents />
=======
        
        <Home/>
>>>>>>> 47dbffd569aafe6b9a83e152f3980593d9eaf2cd
      </div>
      </Router>
  );
}

export default App;
