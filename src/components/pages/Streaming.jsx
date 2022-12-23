import React from 'react';
import '../../App.css';

import './css/streaming.css'
import CardItem from '../CardItem'
import logo from "../videos/video-1.mp4"
import logo2 from "../videos/video-2.mp4"
function Streaming() {
    return (
        <div className="stream-content">
           <div className="App-header">
            <video src={logo} className="App-logo" alt="logo" autoPlay loop muted />
            <video src={logo2} className="App-logo2" alt="logo2" autoPlay loop muted />
            {/* <img src={'https://e4da-171-247-145-94.ap.ngrok.io/video_feed'} className="App-logo" alt="logo" />
            <img src={'/video_feed'} className="App-logo" alt="logo" />
            <img src={'/video_feed'} className="App-logo" alt="logo" /> */}
            </div> 
            <div classname="App-bottom">
            
            </div>
        </div>

      );
  }
  
  export default Streaming;