import React, { useEffect, useState } from 'react'
import "./Log.css"
import Message from './LogChat'

import VD from '../model/VD'
import Camera_Event from '../model/Camera_Event'


const start = () => {
    let response = VD.vd_start(1)
    return response
}

function Log() {


    const[xd, setXD] = useState("")
    const[message, setMessage] = useState("")
    const [oldcount, setoldcount] = useState(0)
    const [newcound, setnewcount] = useState(0)
    const [rate, setRate] = useState(0)
    const [start, setStart] = useState(0)
    const fetchData = async () => {
        let response = await VD.vd_xd(1)
        console.log("Response" , response)
        
        if(response != null || response != undefined){
            
            console.log("xd", xd)
            // let insertRes = await Camera_Event.insertCameraEvent(822224633106104321, response[0].score, response[0].start)
            // console("insertRes",insertRes)
        }
        return response
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setoldcount(oldcount => oldcount + 1);
            
            let response = fetchData()
            setXD(response)
            console.log(xd)

        }, 5000);
        return () => clearInterval(interval);
      });

    // useEffect(() =>{
    //     setMessage("Violennce-Detected at : 6:00:00, confidence: 70%, anomaly event: True")
    // },[xd])

  return (
    <div className='messenger'>

        <div className='chatBox'>
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                {Array(oldcount).fill(true).map((_, i) => <Message message={xd && xd} key={i} />)}                </div>
                <div className="chatBoxBottom">
                    <button className='chatSubmitButton'>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Log