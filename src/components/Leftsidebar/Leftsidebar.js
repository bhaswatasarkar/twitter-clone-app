import React from 'react'
import "./Leftsidebar.css"
import Option from './Option'; 
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
function Leftsidebar() {
  return (
    <div className='leftsidebar'>
        <TwitterIcon  className='twitter-icon'/>

        <Option Icon={HomeOutlinedIcon} text="Home"/>
        <Option Icon={TagIcon} text="Explore"/>
        <Option Icon={NotificationsNoneIcon} text="Notifications"/>
        <Option Icon={MailOutlineIcon} text="Messages"/>
        <Option Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <Option Icon={FeaturedPlayListOutlinedIcon} text="Lists"/>
        <Option Icon={PermIdentityIcon} text="Profile"/>
        <Option Icon={MoreHorizIcon} text="More"/>
        
        <Button variant="outlined" className='tweet-button' fullWidth>Tweet</Button>
        
    </div>
  )
}

export default Leftsidebar
