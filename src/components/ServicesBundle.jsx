import React from 'react'
import './ServicesBundle.css'
import {BiCheck} from 'react-icons/bi'
import { Button } from './Button'
import PaypalSection from './PaypalSection'
import { useState, useRef, useEffect } from "react";
import Subcription from "../model/Subcription";
import Service from "../model/Service";
import { useNavigate } from "react-router-dom";
import CurrentUser from '../model/CurrentUser'
import { duration } from '@mui/material'
//import { Link, useLocation } from 'react-router-dom'



function ServicesBundle() {
  
  const [services, setServices] = useState("");
  const [currentUser, setCurrentUser] = useState(new CurrentUser)

  const navigate = useNavigate();

  let fetchData = async () => {
    let services = await Service.getServiceList()
    setServices(services.body)
  }
  
  // var currentUser = new CurrentUser()

  useEffect(() => {
    fetchData()
    try{
      currentUser.parse()
      console.log("current user", currentUser)
      setCurrentUser(currentUser)
    }
    catch(err){

    }

  },[]);
  
  const handleLogin = (e) => {
    navigate('/login')
  }
  console.log(services)
  return (
    
    <div className='services-container' >
      {/* <div className='services-header' >
        <h1> SERVICES </h1>
        <h2> New technology, new cameras. As the violence continue to rise, have your protection right now. </h2>
      </div> */}
      <div className='services-list'>
        <article className='service'>
          <div className='service-head'>
            <h3> {services && services[0].name}
            </h3>
          </div>
          <ul className='service-info'>
            <li>
              <BiCheck className='service-info-icon' />
              <p> Get 2 cameras </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> {services && services[0].duration} months support </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> 2 times for change position </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> SMS when detect violence </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> Maintenance free 2 times </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service-head'>
            <h3>{services && services[1].name} </h3>
          </div>
          <ul className='service-info'>
            <li>
              <BiCheck className='service-info-icon' />
              <p> Get 5 cameras </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> {services && services[1].duration} months support </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> 3 times for change position </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> Phone when detect violence </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> Maintenance free 5 times </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service-head'>
            <h3> {services && services[2].name} </h3>
          </div>
          <ul className='service-info'>
            <li>
              <BiCheck className='service-info-icon' />
              <p> 20+ cameras </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> {services && services[2].duration} months support </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> 5 times for change position </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> Contact police when detect </p>
            </li>
            <li>
              <BiCheck className='service-info-icon' />
              <p> Maintenance free </p>
            </li>
          </ul>
        </article>
        {!currentUser.loggedIn?
          <div className='purchase-btns1' >
            <Button onClick={handleLogin}>GETTING START BY LOG IN</Button>
          </div>
        : 
        <>
          <div className='purchase-btns1'>
          {/* {!email? <Button buttonStyle='btn--outline'link='/login'>LOG IN</Button> : <button onClick={logOut}>LOG OUT</button>} */}
            <PaypalSection amount={services && services[0].price} service_id = {services && services[0].service_id}></PaypalSection>
          </div>
          <div className='purchase-btns2'>
            <PaypalSection amount={services && services[1].price } service_id = {services && services[1].service_id}></PaypalSection>
          </div>
          <div className='purchase-btns3'>
            <PaypalSection amount={services && services[2].price} service_id = {services && services[2].service_id}></PaypalSection>
          </div>
        </>
        }
        
      </div>
    </div>
  )
  }
export default ServicesBundle
