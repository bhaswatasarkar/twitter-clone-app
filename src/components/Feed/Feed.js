import React from 'react'
import Tweetbox from'./Tweetbox.js';
import './Feed.css'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Post from './Post'
function Feed() {
  return (
    <div className='feed'>
      <div className='feed-top'>
        Home
        <AutoAwesomeOutlinedIcon className='top-right-feed-icon'/>
      </div>
      <Tweetbox/>
      <Post username={'bhaswatasarkar'} displayname={'Bhaswata Sarkar'}/>
      <Post username={'bhaswatasarkar'} displayname={'Bhaswata Sarkar'}/>
      <Post username={'bhaswatasarkar'} displayname={'Bhaswata Sarkar'}/>
      <Post username={'bhaswatasarkar'} displayname={'Bhaswata Sarkar'}/>
      <Post username={'bhaswatasarkar'} displayname={'Bhaswata Sarkar'}/>
      <Post username={'bhaswatasarkar'} displayname={'Bhaswata Sarkar'}/>
     
     
    </div>
  )
}

export default Feed
