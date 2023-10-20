import React, { useEffect, useRef } from 'react'


import Body1 from '../components/Body1';
import HomeFeature from '../components/HomeFeature';
import PracticesType from '../components/PracticesType';
import WhyChooseUs from '../components/WhyChooseUs';

import './home.css'
import Button from '../components/Button';
import HomeFeature1 from '../components/HomeFeature1';
import HomeSchedule from '../components/HomeSchedule';
import HomeSearch from '../components/HomeSearch';
import AppointmentForm from '../components/AppointmentForm';


const MainPage = () => {
  return (
    <>
      <section className="home-hero">
        <Body1/>
        <HomeFeature/>
        <div className="home-background"></div>
      </section>
      <section className="home-practices1">
        <div className="home-heading08">
          <h2 className="home-text14">Our practices</h2>
          
        </div>
        <div className="home-content02">
          <PracticesType/>
          <button className="button button-main">
            <span>All practices</span>
          </button>
        </div>
      </section>
      <WhyChooseUs/>
      <HomeFeature1/>
      <HomeSchedule/>
      <HomeSearch/>
    </>
  )
}

export default MainPage
