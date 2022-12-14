import React, { useEffect, useState } from 'react'
import "./Log.css"
import Message from './LogChat'

import VD from '../model/VD'


const start = () => {
    let response = VD.vd_start(1)
    return response
}


function Log() {


    const[xd, setXD] = useState("")
    const[message, setMessage] = useState("")

    const xd_function = async () => {
        let response = await VD.vd_xd(1)
        console.log("Use Effect xd", response)
        setXD(xd)
        return response
    }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setSeconds(seconds => seconds + 1);
    //       console.log(seconds)
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }, []);
    
    useEffect(() =>{
        const interval = setInterval( async () => {
            let response = await VD.vd_xd(1)
            // console.log("Use Effect xd", response)
            setXD(xd)
            
            return response
          }, 10000);
          return () => clearInterval(interval);
    },[])

    useEffect(() =>{

        xd_function()
        console.log(xd)
    })
    useEffect(() =>{
        let toText = "Anomally acction detected with cofidence rate " + xd.score[0] + "% at the time " + xd.end
            setMessage(toText)
            console.log(message)
            console.log(toText)
    },[xd])

    useEffect(() =>{
        setMessage("Violennce-Detected at : 6:00:00, confidence: 70%, anomaly event: True")
    },[xd])

  return (

    <div className='messenger'>

        <div className='chatBox'>
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Message message={message} own={true}/>
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