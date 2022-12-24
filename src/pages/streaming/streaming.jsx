import React from "react";
import Stream from "../../components/stream/Stream";
import Log from "../../components/log/Log";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { useLocation, useParams } from "react-router";
import { Header } from "@mantine/core";
import "./streaming.css";
function Streaming() {
  const { working_camera_id } = useParams();
  const location = useLocation();
  return (
    <div className="app dark">
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <div>
            {working_camera_id ? (
              <>
                
                <div className="streaming-content">
                  <div className="stream-content-video">
                    <div className="streaming-datatableTitle">
                      <p>{"Working Camera: " + working_camera_id}</p>
                    </div>
                    <Stream working_camera_id={working_camera_id} />
                  </div>
                  <div className="streaming-content-log">
                    <div className="streaming-datatableTitle">
                      <p>History</p>
                    </div>
                    <Log working_camera_id={working_camera_id} />
                  </div>
                </div>
              </>
            ) : (
              <em>Loading...</em>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Streaming;
