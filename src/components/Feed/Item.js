import React from 'react'
import './Item.css'
function Item({Icon,num,design}) {
  return (
    <div className={`item ${design}`}>
        <Icon className='item-icon'/><div className='item-text'>{num}</div>
    </div>
  )
}

export default Item
