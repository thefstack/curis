import React from 'react'
import Features from './features'

const HomeFeature = () => {
  return (
    <div id="features" className="home-features">
          <div className="home-content01">
            <Features Title="Virtual Assistant" Description="MedChat AI"/>
            <Features Title="Virtual Clinic" Description="Chat with Doctors online" />
            <Features Title="Clinical results" Description="Get your reports here"></Features>
          </div>
        </div>
  )
}

export default HomeFeature
