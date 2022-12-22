import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  
  const { dispatch } = useContext(DarkModeContext);

  function logOut() {

    sessionStorage.clear();
  }
  return (
    <div className="sidebar">
      <div className="top">
      <Link to='/' className='navbar-logo'>
        <i className='fab fa-typo3'/>
      </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Home</p>
          <Link to='/' style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Home Page</span>
            </li>
          </Link>
          <p className="title">SERVICES</p>
          <p className="title">PERSONAL</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <Link to="/manage/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Contacts</span>
            </li>
          </Link>
          {/* <Link to="/manage/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>SUBCRIPTIONS</span>
            </li>
          </Link> */}
          {/* <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li> */}
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}

          {/* <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">ACCOUNT</p>
          <Link to="/" onClick={logOut}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
          
        </ul>
      </div>

      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
