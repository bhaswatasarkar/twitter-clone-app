import React,{useState} from 'react'
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
import Firebase from '../../firebase';

function Tweetbox() {

  const[tweetmessage,setTweetmessage] = useState("");

  const postTweet = (e)=>{
    e.preventDefault();
    Firebase.db.collection('posts').add({
      username:"clementinamaribel",
      displayname:"Clementina Maribel",
      verified:false,
      text:tweetmessage,
      avatarimage:"https://i.pravatar.cc/150?img=5"
      })
      setTweetmessage("");
  }
  return (
    <div className='tweetbox'>
      <form>
          <div className='avatar-tweettextbox'>
            <Avatar className='avatar' alt="Clementina Maribel" src="https://i.pravatar.cc/150?img=5" />
            <input value={tweetmessage} className='tweettextbox' placeholder="What's happening?" type='text' onChange={e=>setTweetmessage(e.target.value)}></input>
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
            <Button onClick={postTweet} className='tweet-button-tweetbox'>Tweet</Button>
          </div>

        </form>
    </div>
  )
}

export default Tweetbox
