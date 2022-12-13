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
    useEffect(() =>{
        // start()
    },[])

    useEffect(() =>{

        const xd = async () => {
            let response = await VD.vd_xd(1)
            console.log("Use Effect xd", response)
            setXD(xd)
            return response
        }
        xd()
        console.log(xd)
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