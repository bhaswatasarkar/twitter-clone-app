import React from 'react'
import './Tweetbox.css'
import Item from './Item.js';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';


function Tweetbox() {
  return (
    <div className='tweetbox'>
      <form>
          <div className='avatar-tweettextbox'>
            <Avatar className='avatar' alt="Bhaswata Sarkar" src="/static/images/avatar/1.jpg" />
            <input className='tweettextbox' placeholder="What's happening?"></input>
          </div>

          <div className='otherinputs-tweetbutton'>
            <Stack className='otherinputs' direction="row" spacing={2}>
              <Item Icon={InsertPhotoOutlinedIcon}/>
              <Item Icon={GifBoxOutlinedIcon}/>
              <Item Icon={AlignHorizontalLeftOutlinedIcon}/>
              <Item Icon={SentimentSatisfiedOutlinedIcon}/>
              <Item Icon={CalendarTodayOutlinedIcon}/>
              <Item Icon={FmdGoodOutlinedIcon}/>
            </Stack>  
            <Button className='tweet-button-tweetbox'>Tweet</Button>
          </div>

        </form>
    </div>
  )
}

export default Tweetbox
