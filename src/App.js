import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/pages/Login';
import Cameras from './components/pages/Cameras';
import Services from './components/pages/Services';

import Test from './components/pages/Test';
import { Register } from './components/pages/Register';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Login' exact element={<Login/>} />
          <Route path='/Register' exact element = {<Register/>} />
          <Route path='/Cameras' exact element={<Cameras/>} />
          <Route path='/Services' exact element={<Services/>} />
          <Route path='/test' exact element={<Test/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
