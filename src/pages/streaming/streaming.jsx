import React from 'react';
import Stream from '../../components/stream/Stream';
import Log from '../../components/log/Log';
function Streaming() {
    return (
        <div className="app dark">
            <div className='streaming'>
                <Stream/>
                <Log camera_working_id={"822224633106104321"}/>
            </div>
        </div>
      );
  }
  
  export default Streaming;