import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './components/UserPage/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Link className="nav-link" to={"/login"}>
          Login
        </Link>

        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
    /*<div><Login /></div>*/
  );
}

export default App;
