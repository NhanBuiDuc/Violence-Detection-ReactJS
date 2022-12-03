import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './ServicesBundle.css'

function ServicesBundle() {
  return (
    <div className='services-container'>
      <img src='../images/img-bannerservice.jpg' alt='' />
      <h1>What we have for you?</h1>
      <div className='price-list'>
        <article className='service'>
          <div className='service__head'>
            <h3>10$/Month</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>10$/Month</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>10$/Month</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Camera</p>
            </li>
          </ul>
        </article>
      </div>
    </div>
  )
}

export default ServicesBundle
