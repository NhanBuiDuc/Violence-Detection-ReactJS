import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cameras from './components/pages/Cameras';
import Services from './components/pages/Services';
import Profile from './components/pages/Profile';
import { Register } from './pages/register/Register';
import Streaming from './components/pages/Streaming';
import ContactList from './pages/contact/Contact';
import { AddContact } from './pages/contact/AddContact';
import Log from './components/log/Log';
import Demo from './components/CameraCard';
import Main from "./pages/main/Main";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
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
          <Route path='/stream' exact element={<Streaming/>} />
          {/* <Route path='/profile' exact element={<UserProfile/>} /> */}
          <Route path='/contact' exact element={<ContactList/>} />
          <Route path='/addcontact' exact element={<AddContact/>} />
          <Route path='/log' exact element={<Log/>} />
          <Route path='/demo' exact element={<Demo/>}/>
          <Route path="/manage">
            <Route index element={<Main />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="users">
              <Route index element={<ContactList />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List/>} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
