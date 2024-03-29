import React, { forwardRef } from 'react'
import './Post.css'
import './Item.js'
import Avatar from '@mui/material/Avatar';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

import Item from './Item.js';
import Postmodal from './Postmodal.js';
const Post = forwardRef(
({avatarimage,displayname,username,text,image,num_replies,num_retweets,num_likes,verified,tweetId},ref) =>{
  return (
    <div className='post' ref={ref}>
      <div className='post-avatar'>
        <Avatar className='avatar' alt="" src={avatarimage} />
      </div>
      <div className='post-header-body-footer'>
        <div className='post-header'>
          <div className="post-displayname">{displayname}</div>
          {verified && <VerifiedRoundedIcon className='post-verifiedicon-badge'/>}
          <div className='post-username'>&nbsp;@{username}</div>
          <div className='post-options-dropdown'><Postmodal tweetId={tweetId}></Postmodal></div>
        </div>
        <div className='post-body'>
          <div className='post-text'>
            {text}
          </div> 
          <div className='post-image'>
            <img src={image} alt=''/>
          </div>
        </div>
        <div className='post-footer'>
          <Item Icon={ChatBubbleOutlineRoundedIcon} num={1000} design={'post-footer-item'}/>
          <Item Icon={RepeatRoundedIcon} num={1000} design={'post-footer-item'}/>
          <Item Icon={FavoriteBorderRoundedIcon} num={1000} design={'post-footer-item'}/>
          <Item Icon={IosShareRoundedIcon} design={'post-footer-item'}/>
        </div>
      </div>
    </div>
  )
})

export default Post
