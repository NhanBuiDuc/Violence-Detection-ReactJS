import React, { useEffect, useState } from "react";
import "./Log.css";
import Message from "../log-message/LogChat";

import VD from "../../model/VD";
import Camera_Event from "../../model/Camera_Event";

const start = () => {
  let response = VD.vd_start(1);
  return response;
};

function Log(props) {
  const [message, setMessage] = useState([]);

  const setMessages = async (xd_array) =>{
    let message_array = []
    xd_array.forEach(element => {
      var time = new Date(element.start).toLocaleTimeString()
      var date = new Date(element.start).toDateString()
        let msg = element.name + ": " + date + " " + time + 
        ", with possibility of: " + element.rate + ", at location: " + element.location;
        message_array.push(msg)
    });
    setMessage(message_array)
  }
  const fetchData = async () => {
    // let response = await Camera_Event.getCameraEventByWorkingId(
    //   "822224633106104321"
    let response = await Camera_Event.getCameraEventByWorkingId(props.working_camera_id).then( (response) => {
      console.log("Response", response);

      if (response != null || response != undefined) {
        // setXD(response.body)
        // console.log("xd", xd);
        // setCount(xd.length)
        if(response.status !== "400")
          setMessages(response.body)
        // let insertRes = await Camera_Event.insertCameraEvent(822224633106104321, response[0].score, response[0].start)
        // console("insertRes",insertRes)
      }
    }

    )

    return response;
  };
  // GOOD

  // useEffect(() => {
    
    
  //   setMessages(xd)
  // }, [message])

  useEffect(() => {
    fetchData();
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  });
  

  // useEffect(() =>{
  //     setMessage("Violennce-Detected at : 6:00:00, confidence: 70%, anomaly event: True")
  // },[xd])

  return (
    <div className="messenger">
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            {Array(message.length)
              .fill(true)
              .map((_, i) => (
                <Message message={message && message[i]} key={i} />
              ))}{" "}
          </div>
          <div className="chatBoxBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Log;
