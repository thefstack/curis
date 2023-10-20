import React from 'react'

const HomeSchedule = () => {
  return (
    <section id="schedule" className="home-schedule">
        <div className="home-content07">
          <div className="home-header15">
            <h2 className="home-heading13">
              Schedule an in person or virtual appointment today
            </h2>
          </div>
          <div className="home-types">
            <a
              href="#book"
              className="home-book-person button button-main button-white"
            >
              <span>Book in person appointment</span>
            </a>
            <button className="button button-main button-white home-book-person1">
              <span>Book virtual appointment</span>
            </button>
          </div>
        </div>
      </section>
  )
}

export default HomeSchedule
