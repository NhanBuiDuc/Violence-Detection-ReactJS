import React, { useState } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import CurrentUser from "../../model/CurrentUser";

function Home() {
  // let currentUser = new CurrentUser()
  // console.log(currentUser)
  
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
