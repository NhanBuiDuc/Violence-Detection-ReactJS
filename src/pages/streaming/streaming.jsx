import React from "react";
import Stream from "../../components/stream/Stream";
import Log from "../../components/log/Log";
import Sidebar from "../../components/sidebar/Sidebar";
function Streaming() {
  return (
    <div className="app dark">
      <div className="list">
      <Sidebar />
        <div className="listContainer">

          <div>
            <Stream />
            {/* <Log camera_working_id={""}/> */}
          </div>
          </div>
      </div>
    </div>
  );
}

export default Streaming;
