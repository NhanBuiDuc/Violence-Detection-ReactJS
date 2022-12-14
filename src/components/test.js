import React, { useEffect, useState } from 'react'
import "./Log.css"
import Message from './LogChat'



function Asd() {
const [count, setcount] = useState(0)
const ex = ["1", "2","3","4"]
useEffect(() => {
    const interval = setInterval(() => {
    setcount(count => count + 1);
    }, 1000);
    if (interval >= 5) { 
    return() => clearInterval(interval);}
  }, []);

  return (
    <div className='messenger'>

        <div className='chatBox'>
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                {Array(ex.length).fill(true).map((_,i) => <Message message={ex[i]} key={i} />)}                </div>
                <div className="chatBoxBottom">
                    <button className='chatSubmitButton'>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Asd