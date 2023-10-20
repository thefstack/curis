import React from 'react'

const WhyChooseUs = () => {
  return (
    <section id="how-it-works" className="home-why">
        <div className="home-heading09">
          <h2 className="home-header08">Why choose us</h2>
          <p className="home-header09">
          Empowering Health: Your Well-being, Our Commitment
          </p>
        </div>
        <div className="home-content03">
          <div className="home-video">
            <video
              src='/why.mp4'
              className="home-video1"
             autoPlay muted loop></video>
          </div>
          <div className="home-caption7">
            <h3 className="home-header10">
            Your Health, Our Priority: Streamlined Appointments, Reduced Wait Times, and Quality Care
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h3>
            <p className="home-header11">
            Transforming Healthcare: Your Partner for Seamless Appointments and Quality Services
            </p>
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUs
