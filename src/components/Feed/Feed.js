import React, { useState, useEffect } from 'react';
import Tweetbox from'./Tweetbox.js';
import './Feed.css'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Post from './Post'
import db from '../../firebase'
import FlipMove from 'react-flip-move'

function Feed() {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>(
      setPosts(snapshot.docs.map(doc=>({id: doc.id, ...doc.data()})))))
      },[]);

  return (
    <div className='feed'>
      <div className='feed-top'>
        Home
        <AutoAwesomeOutlinedIcon className='top-right-feed-icon'/>
      </div>
      <Tweetbox/>
      <FlipMove>
        {posts.map(post=>(
          <Post
          key={post.id}
          username={post.username}
          displayname={post.displayname}
          verified={post.verified}
          text={post.text}
          avatarimage={post.avatarimage}
          image={post.image}
          />
        ))}
      </FlipMove>  
     
    </div>
  )
}

export default Feed
