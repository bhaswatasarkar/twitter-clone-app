import React from 'react'
import './Item.css'
function Item({Icon,num}) {
  return (
    <div classname='item'>
        <Icon classname='icon'/>{num}
    </div>
  )
}

export default Item
