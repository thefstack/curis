import React from 'react'
import Button from './Button'

const Body1 = () => {
  return (
    <div className="home-main">
          <div className="home-content">
            <div className="home-heading07">
              <p className="home-caption6">
              Experienced general practitioners dedicated to your well-being
              </p>
              <div className="home-header07">
                
              </div>
            </div>
            <Button to="/login"/>
          </div>
          <div className="home-image11">
            <img
              alt="image"
              src="/doctor-image-1500w.png"
              className="home-image12"
            />
          </div>
    </div>
  )
}

export default Body1
