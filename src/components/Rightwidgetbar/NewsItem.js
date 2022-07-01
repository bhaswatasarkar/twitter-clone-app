import React from 'react'
import './NewsItem.css'
function NewsItem({sourcename,author,title,urlToImage}) {
    
        return (
            <div className='news'>
                <div className='news-content'>
                    <div className='news-header'>
                        {sourcename} &bull; {author}
                    </div>

                    <div className='news-body'>
                        {title}
                    </div>

                    <div className='news-footer'>
                        127K Tweets
                    </div>
                </div>
                <img src={urlToImage} alt='' className='news-image'/>
            </div>
        )
    
}

export default NewsItem
