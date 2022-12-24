import "./LogChat.css";
import React from "react";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FBgHh5ZoLYf11QsznUnfIIckFgFfpgD_nJ1quCQ&s"
          alt=""
        />
        <p className="messageText">{message}</p>
      </div>
      <div className="messageBottom">5 mins ago</div>
    </div>
  );
}
