import React from 'react';
import './stream.css'
import { useEffect, useState } from "react";
import noSignal from "../../images/no-signals.gif"


function Stream() {
    const [imgSrc, setImgSrc] = useState('/video_feed');

    const handleError = () => setImgSrc(noSignal);

    return (
        <div className='stream'>
            <div className='stream-video-frame'>
                <img src={imgSrc} className="App-logo" alt="logo" onError={handleError}/>
            </div>

        </div>
      );
  }
  
  export default Stream;