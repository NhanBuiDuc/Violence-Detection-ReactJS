import React from 'react'
import CurrentUser from '../model/CurrentUser'
import './UserProfile.css'
// import avatar from '../images/blank-profile-picture-gd7806bc02_1280.png'
import { Button } from './Button'

class UserProfile extends React.Component {
    currentuser = new CurrentUser()
  protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted =user_email.split("@")
    part1 = splitted[0];
    avg = part1.length /2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 =  splitted[1];
    return part1 + "***@" + part2;
  }
  render () {
    if(this.currentuser.loggedIn == true ) {
      return (
        <div className='profile-page'>
          <h1> USER INFORMATION </h1>
          <div className='profile-container' >
            <div className='profile-card'>
              <div className='upper-container'>
                <div className='profile-img'>
                  {/* <img src={avatar} alt="" height="100px" width="100px" /> */}
                </div>
              </div>
              <div className='lower-container'>
                <h3> {this.currentuser.name} </h3>
                <h3> {this.protect_email(this.currentuser.email)} </h3>
                <h3> {this.currentuser.phone} </h3>
                <h3> {this.currentuser.address} </h3>
                <h3> {this.currentuser.role} </h3>
                <Button
          className='btns'
          buttonStyle='btn--purchase'
          buttonSize='btn--medium'
        >
        Edit
        </Button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default UserProfile