import React from 'react'
import './Option.css'

function Option(prop) {
  return (
    <div  className='option'>
      <prop.Icon/><div className='option-text'>{prop.text}</div>
    </div>
  )
}

export default Option


