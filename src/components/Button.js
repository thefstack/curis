import React, { useEffect } from 'react'
import {Link} from "react-router-dom"

const Button = ({to}) => {

    const clicked=()=>{
        console.log("aponte,ent")
    }
  return (
    <Link to={to} onClick={clicked} className="home-book1 button button-main">
        <img
            alt="image"
            src="/Icons/calendar.svg"
            className="home-image09"
        />
        <span className="home-text12">Book an appointment</span>
    </Link>
  )
}

export default Button
