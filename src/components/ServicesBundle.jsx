import React from 'react'
import './ServicesBundle.css'
import {BiCheck} from 'react-icons/bi'
import { Button } from './Button'
import PaypalSection from './PaypalSection'
import { useState, useRef, useEffect } from "react";
import Subcription from "../model/Subcription";
import Service from "../model/Service";

import CurrentUser from '../model/CurrentUser'
import { duration } from '@mui/material'




function ServicesBundle() {
  
  const [services, setServices] = useState("");

  let fetchData = async () => {
    let services = await Service.getServiceList()
    setServices(services.body)
  }
  
  // var currentUser = new CurrentUser()

  useEffect(() => {
    fetchData()
  },[]);
  
  console.log(services)
  return (

    <div className='services-container' >
      <div className='services-header' >
        <h1> SERVICES </h1>
        <h2> New technology, new cameras. As the violence continue to rise, have your protection right now. </h2>
      </div>
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
        <div className='purchase-btns1'>
        <PaypalSection amount="50"></PaypalSection>
          </div>
          <div className='purchase-btns2'>
          <PaypalSection amount="100"></PaypalSection>
          </div>
          <div className='purchase-btns3'>
          <PaypalSection amount="500"></PaypalSection>
          </div>
      </div>
    </div>
  )
  }
export default ServicesBundle
