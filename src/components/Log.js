import React from 'react'
import "./Log.css"
import Message from './LogChat'


function Log() {
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