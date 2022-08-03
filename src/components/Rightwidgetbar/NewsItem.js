import React from 'react'
import './NewsItem.css'
function NewsItem({sourcename,author,title,urlToImage,sectionName}) {
    
        return (
            <div className='news'>
                <div className='news-content'>
                    <div className='news-header'>
                        {sourcename} {author && <>&bull; {author}</>}
                    </div>

                    <div className='news-body'>
                        {title}
                    </div>

                    <div className='news-footer'>
                        {sectionName}
                    </div>
                </div>
                <img src={urlToImage} alt='' className='news-image'/>
            </div>
        )
    
}

export default NewsItem
