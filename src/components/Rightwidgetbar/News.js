import React from 'react'
import './News.css'
function News() {
  return (
    <div className='news'>
        <div className='news-content'>
            <div className='news-header'>
                Text1 &bull; Text2
            </div>

            <div className='news-body'>
                Qui ea incididunt irure dolor.
            </div>

            <div className='news-footer'>
                Text3
            </div>
        </div>
        <img src="https://picsum.photos/200" alt='' className='news-image'/>
    </div>
  )
}

export default News
