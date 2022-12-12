import React from 'react';

function Streaming() {
    return (
    <div>
        <h1>Result</h1>
        <img src="{{ url_for('video_feed') }}" alt='NO SIGNAL'></img>
    </div>
    );
  }
  
  export default Streaming;