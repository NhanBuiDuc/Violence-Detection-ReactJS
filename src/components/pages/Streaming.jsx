import React from 'react';
// import './css/streaming.css'
import './css/streaming.css'
import CardItem from '../CardItem'
import logo from "../videos/video-1.mp4"
function Streaming() {
    return (
        <div className="App">
           <div className="App-header">
            <video src={logo} className="App-logo" alt="logo" autoPlay loop muted />
            {/* <img src={'/video_feed'} className="App-logo" alt="logo" />
            <img src={'/video_feed'} className="App-logo" alt="logo" />
            <img src={'/video_feed'} className="App-logo" alt="logo" /> */}
          
          </div> */
          
          
        </div>
      );
  }
  
  export default Streaming;