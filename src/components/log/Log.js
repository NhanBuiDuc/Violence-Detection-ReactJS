import React, { useEffect, useState } from "react";
import "./Log.css";
import Message from "../LogChat";

import VD from "../../model/VD";
import Camera_Event from "../../model/Camera_Event";

const start = () => {
  let response = VD.vd_start(1);
  return response;
};

function Log() {
  const [xd, setXD] = useState("");
  const [message, setMessage] = useState([]);
  const [count, setCount] = useState(0);
  const [newcound, setnewcount] = useState(0);
  const [rate, setRate] = useState(0);
  const [start, setStart] = useState(0);

  const setMessages = async (xd) =>{
    let message_array = []
    xd.forEach(element => {
      var dt = new Date(element.start)
        let msg = element.name + " at: " + dt + 
        " with possibility of: " + element.rate + " at location: " + element.location +
        " with camera_id: " + element.working_camera_id 
        message_array.push(msg)
    });
    setMessage(message_array)
  }
  const fetchData = async () => {
    let response = await Camera_Event.getCameraEventByWorkingId(
      "822224633106104321"
    ).then( (response) => {
      console.log("Response", response);

      if (response != null || response != undefined) {
        setXD(response.body)
        console.log("xd", xd);
        setCount(xd.length)
        if(response != undefined)
          setMessages(response.body)
        // let insertRes = await Camera_Event.insertCameraEvent(822224633106104321, response[0].score, response[0].start)
        // console("insertRes",insertRes)
      }
    }

    )

    return response;
  };
  // GOOD

  useEffect(() => {
    console.log("xd", xd);
    setCount(xd.length)
    if(xd != "")
      setMessages(xd)
  }, [xd])

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
