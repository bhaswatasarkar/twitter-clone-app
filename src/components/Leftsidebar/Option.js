import React from 'react'
import './Option.css'
import { Link } from "react-router-dom";

function Option(prop) {

  let lcase = "/"+prop.text.toLowerCase();
  console.log(lcase)
  return (
    <div  className='option'>
      <prop.Icon/><div className='option-text'><Link to={lcase} style={{textDecoration: 'none', color: 'black'}}>{prop.text}</Link></div>
    </div>
  )
}

export default Option


