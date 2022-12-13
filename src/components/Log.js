import React, { useEffect, useState } from 'react'
import "./Log.css"
import Message from './LogChat'

import VD from '../model/VD'
function Log() {


    
    

    const[interval, setInterval] = useState()
    useEffect(() =>{
        // let i = 0;
        // interval = setInterval(() => {
        //   if (i<11) {
        //     this.getPerson(this.apiUrl + i);
        //     i++;
        //     console.log("waiting for the next call.");
        //   }
        //   else {
        //     clearInterval(interval)
        //   }
    
        // }, 5000);
        VD.vd_start()
    },[])
    useEffect(() =>{
        let i = 0;
        interval = setInterval(() => {
          if (i<11) {
            this.getPerson(this.apiUrl + i);
            i++;
            console.log("waiting for the next call.");
          }
          else {
            clearInterval(interval)
          }
    
        }, 5000);
    })
    
  return (
    <div className='messenger'>

        <div className='chatBox'>
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Message own={true}/>
                    <Message/>
                    <Message own={true}/>
                    <Message/><Message own={true}/>
                    <Message/><Message own={true}/>
                    <Message/><Message own={true}/>
                    <Message/><Message own={true}/>
                    <Message/>
                </div>
                <div className="chatBoxBottom">
                    <button className='chatSubmitButton'>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Log