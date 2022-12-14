import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/img-9.jpg'
              text='The reason behind our services'
              label='Introduction'
              path=''
            />
            <CardItem
              src='images/img-2.jpg'
              text='How to get started'
              label='Introduction'
              path='/login'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Our best subcriptions'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Access to your protection'
              label='How it works'
              path='/cameras'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;