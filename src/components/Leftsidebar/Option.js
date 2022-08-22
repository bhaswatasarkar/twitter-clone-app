import React from 'react'
import './Option.css'
import { Link } from "react-router-dom";

function Option(prop) {

  let lcase = "/"+prop.text.toLowerCase();
  return (
    <div  className='option'>
      <prop.Icon className='test'/><div className='option-text'><Link to={lcase} style={{textDecoration: 'none', color: 'black'}}>{prop.text}</Link></div>
    </div>
  )
}

export default Option


