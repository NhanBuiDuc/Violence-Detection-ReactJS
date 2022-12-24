import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cameras from './components/pages/Cameras';
import Services from './components/pages/Services';
import Profile from './components/pages/Profile';
import { Register } from './pages/register/Register';
import Streaming from './pages/streaming/streaming';
import ContactList from './pages/contact/Contact';
import { AddContact } from './pages/contact/AddContact';
import Log from './components/log/Log';
import Demo from './components/CameraCard';
import Main from "./pages/main/Main";
import List from "./pages/camera-service-list/camera-service-list";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./datatablesource/formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import CameraServiceList from "./pages/camera-service-list/camera-service-list"
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Login' exact element={<Login/>} />
          <Route path='/Register' exact element = {<Register/>} />
          <Route path='/Cameras' exact element={<Cameras/>} />
          <Route path='/Services' exact element={<Services/>} />
          <Route path='/profile' exact element={<Profile/>} />

          {/* <Route path='/profile' exact element={<UserProfile/>} /> */}
          <Route path='/contact' exact element={<ContactList/>} />
          <Route path='/addcontact' exact element={<AddContact/>} />
          <Route path='/log' exact element={<Log/>} />
          <Route path='/demo' exact element={<Demo/>}/>
          <Route path="/manage">

            <Route index element={<Main />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="contacts">
              <Route index element={<ContactList />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="security">
              <Route index element = {<CameraServiceList/>} />
            </Route>
            <Route path='stream/:working_camera_id'>
              <Route index element={<Streaming/>} />
            </Route>

          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
