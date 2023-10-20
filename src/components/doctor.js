import React from 'react'

import PropTypes from 'prop-types'

import './doctor.css'

const Doctor = (props) => {
  return (
    <div className="doctor-doctor">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="doctor-image"
      />
      <div className="doctor-heading">
        <h2 className="doctor-text">{props.heading}</h2>
        <p className="doctor-text1">{props.text}</p>
      </div>
    </div>
  )
}

Doctor.defaultProps = {
  heading: 'Dr. Audrey Smith',
  image_src: '/Doctors/doctor-1-300w.png',
  image_alt: 'image',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Doctor.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default Doctor
