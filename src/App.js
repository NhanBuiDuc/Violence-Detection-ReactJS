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
import ContactList from './components/Contact';
import { AddContact } from './components/AddContact';
import { UserProfile } from './components/Profile';
import Log from './components/Log';
import Demo from './components/CameraCard';
import Asd from './components/test';

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
          <Route path='/profile' exact element={<UserProfile/>} />
          <Route path='/contact' exact element={<ContactList/>} />
          <Route path='/addcontact' exact element={<AddContact/>} />
          <Route path='/log' exact element={<Log/>} />
          <Route path='/demo' exact element={<Demo/>}/>
          <Route path='/test' exact element={<Asd/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
