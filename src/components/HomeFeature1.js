import React from 'react'
import Button from './Button'

const HomeFeature1 = () => {
  return (
    <section className="home-features1">
        <div className="home-section6">
          <div className="home-content04">
            <div className="home-header12">
              <h2 className="home-heading10">
                Dedicated doctors with the core mission to help.
              </h2>
              
            </div>
            <div className="read-more">
              <span className="home-text17">See our doctors</span>
              <img
                alt="image"
                src="/Icons/arrow-2.svg"
                className="home-image14"
              />
            </div>
          </div>
          <img alt="image" src="https://pathfinders.training/wp-content/uploads/2015/03/The-Dedicated-Doctor.jpg" className="home-image15" />
        </div>
        <div className="home-section7">
          <div className="home-content05">
            <div className="home-header13">
              <h2 className="home-heading11">
                Get access to specialty tests and breakthrough information.
              </h2>
              
            </div>
            <div className="read-more">
              <span className="home-text18">Find test</span>
              <img
                alt="image"
                src="/Icons/arrow-2.svg"
                className="home-image16"
              />
            </div>
          </div>
          <img alt="image" src="https://top10us.com/wp-content/uploads/2021/03/shutterstock_1114244621-1.jpg" className="home-image17" />
        </div>
        <div className="home-section8">
          <div className="home-content06">
            <div className="home-header14">
              <h2 className="home-heading12">
                Find out how we can help you help you.
              </h2>
            </div>
            <Button to="/login"/>
          </div>
          <img
            alt="image"
            src="https://www.xlntbrain.com/wp-content/uploads/2015/02/Dollarphotoclub_84457090.jpg"
            className="home-image18"
          />
        </div>
        <button className="home-book4 button button-main">
          <span>Book a virtual appointment</span>
        </button>
      </section>
  )
}

export default HomeFeature1
