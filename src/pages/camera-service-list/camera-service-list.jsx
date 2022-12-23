import "./camera-service-list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import CameraListDataTable from "../../components/datatable/CameraListDataTable"
import Account from "../../model/Account"
import { cameraListRows, cameraListActionColumns, cameraListComlumns } from "../../datatablesource/cameralist_dtble_src";
import { useState, useEffect} from "react";
import CurrentUser from "../../model/CurrentUser";
import React from 'react'
const CameraServiceList = () => {

  const [data, setData] = useState(null);

  let fetchData = async () => {
    let currentUser = new CurrentUser()
    currentUser.parse()
    let response = await Account.getCamerasAndServicesByAccountId(currentUser.account_id).
    then( (response) =>{
      setData(response.body)
    })
  }
  useEffect( () => {
    fetchData()
  }, [])

  return (
    <div className="dark app">
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        {
          data?
          <CameraListDataTable isAddNew={false} title={"Subcription List"} data = {data && data} columns = {cameraListComlumns.concat(cameraListActionColumns)} />
          :
          <em>Loading...</em>
        }
      </div>
      </div>
    </div>
  )
}
export default CameraServiceList