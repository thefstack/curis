import React from 'react'
import Practice from '../components/practice'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const PracticesType = () => {
  return (
    <div className="home-grid1">
            <Link to="/">
              <div className="home-practice-wrapper">
                <Practice img="/cardiology.png"/>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper1">
                <Practice Title="Orthopedics" img="/orthopedics.png"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper2">
                <Practice Title="Ophtalmology" img="/ophtalmology.png"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper3">
                <Practice Title="Pediatrics" img="/pediatric.png"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper4">
                <Practice Title="Nutrition" img="/schedule.png"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper5">
                <Practice Title="General" img="doctor.png"></Practice>
              </div>
            </Link>
          </div>
  )
}

export default PracticesType
