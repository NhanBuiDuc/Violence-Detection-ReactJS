import React, { useEffect, useState } from 'react'
import "./Log.css"
import Message from './LogChat'



function Asd() {
const [count, setcount] = useState(0)

useEffect(() => {
    const interval = setInterval(() => {
      setcount(count => count + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='messenger'>

        <div className='chatBox'>
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                {Array(count).fill(true).map((_, i) => <Message message="asd" key={i} />)}                </div>
                <div className="chatBoxBottom">
                    <button className='chatSubmitButton'>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Asd