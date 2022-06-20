import React from 'react'
import './Post.css'
import './Item.js'
import Avatar from '@mui/material/Avatar';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import Item from './Item.js';
function Post({avatarimage,displayname,username,text,image,num_replies,num_retweets,num_likes}) {
  return (
    <div className='post'>
      <div classname='post-avatar'>
        <Avatar className='avatar' alt="Bhaswata Sarkar" src="/static/images/avatar/1.jpg" />
      </div>
      <div className='post-header-body-footer'>
        <div className='post-header'>
          <div className="post-displayname">{displayname}</div>
          <VerifiedRoundedIcon className='post-verifiedicon-badge'/>
          <div className='post-username'>&nbsp;@{username}</div>
        </div>
        <div className='post-body'>
          <div className='post-text'>
            Lorem adipisicing quis aute qui consequat.
          </div> 
          <div className='post-image'>
            <img src="https://picsum.photos/200" alt=''/>
          </div>
        </div>
        <div className='post-footer'>
          <Item Icon={ChatBubbleOutlineRoundedIcon} num={1000}/>
          <Item Icon={RepeatRoundedIcon} num={1000}/>
          <Item Icon={FavoriteBorderRoundedIcon} num={1000}/>
          <Item Icon={IosShareRoundedIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Post
