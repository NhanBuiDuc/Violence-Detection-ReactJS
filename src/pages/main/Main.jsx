import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Main.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import CurrentUser from '../../model/CurrentUser'
import { useState, useRef, useEffect } from "react";

const Main = () => {
  const [currentUser, setCurrentUser] = useState(new CurrentUser)
  useEffect(() => {
    try{
      currentUser.parse()
      console.log("current user", currentUser)
      setCurrentUser(currentUser)
    }
    catch(err){

    }

  },[]);

  return (
    <div className="app dark">
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          {/* <Navbar /> */}
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
