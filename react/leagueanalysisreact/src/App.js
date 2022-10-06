import logo from './logo.svg';
import './styles/App.css';
import Home from './components/home';
import Contact from './components/contact';
import Leaderboard from './components/leaderboard';
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 id='main_title'>League Analysis</h1>
      <Router>
        <div className='App'>
          <nav id='app-nav' >
            <p id='options'>
              <Link to= "/">Home</Link>
            </p>
            <p id='options'>
              <Link to= "/leaderboard">Leaderboard</Link>
            </p>
            <p id='options'>
              <Link to= "/contact">Contact Us</Link>
            </p>
          </nav>
        </div>
        <br></br>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/leaderboard' element={< Leaderboard />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
