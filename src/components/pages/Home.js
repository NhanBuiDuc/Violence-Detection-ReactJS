import React, { useState } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import CurrentUser from "../../model/CurrentUser";
import Navbar from '../Navbar';
function Home() {
  // let currentUser = new CurrentUser()
  // console.log(currentUser)
  
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />

    </>
  );
}

export default Home;
