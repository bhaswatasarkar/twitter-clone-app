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
      <Post
       username={'bhaswatasarkar'}
       displayname={'Bhaswata Sarkar'}
       verified={true}
       text={'hey its working'}
       avatarimage={'https://picsum.photos/201'}
       image="https://picsum.photos/200"
       />
      <Post
       username={'bhaswatasarkar'}
       displayname={'Bhaswata Sarkar'}
       verified
       text={'hey its working'}
       avatarimage={'https://picsum.photos/201'}
       image="https://picsum.photos/200"
       />
       <Post
       username={'bhaswatasarkar'}
       displayname={'Bhaswata Sarkar'}
       verified={false}
       text={'hey its working'}
       avatarimage={'https://picsum.photos/201'}
       image="https://picsum.photos/200"
       />
       <Post
       username={'bhaswatasarkar'}
       displayname={'Bhaswata Sarkar'}
       verified={false}
       text={'hey its working'}
       avatarimage={'https://picsum.photos/201'}
       image="https://picsum.photos/200"
       />
     
     
    </div>
  )
}

export default Feed
