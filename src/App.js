import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Cameras from './components/pages/Cameras';
import Services from './components/pages/Services';
import Profile from './components/pages/Profile';
import { Register } from './components/pages/Register';
import Streaming from './components/pages/Streaming';
import { UpdateProfile } from './components/UpdateProfile';
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
          <Route path='/profile' exact element={<Profile/>} />
          <Route path='/stream' exact element={<Streaming/>} />
          {/* <Route path='/update' exact element={<UpdateProfile/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
