import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function  HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./videos/video-2.mp4' autoPlay loop muted />
      <h1>AVOID VIOLENCE </h1>
      <p>Contact us right now</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/login'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
