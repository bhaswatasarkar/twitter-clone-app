import React from 'react'
import { useEffect, useState } from 'react'
import './Rightwidgetbar.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NewsList from './NewsList';
function Rightwidgetbar() {
  const[searchString,setSearchString] = useState("");
  useEffect(() => {
    document.title = searchString
})

  return (
    <div className='rightwidgetbar'>
      <div className='widget-input'>
        <SearchRoundedIcon className='widget-search-icon'/>
        <input placeholder='Search Twitter' value={searchString} className='widget-search-text' onChange={e=>setSearchString(e.target.value)}></input>
      </div>

      <div className='news-container'>
        <div className='news-container-header'>What's happening</div>
        <div className='news-components'>
          <div id='news-components-error'></div>
          <NewsList id="news-list" searchString={searchString}/>
        </div>
        <div className='news-container-footer'>Show more</div>
      </div>

    </div>
  )
}

export default Rightwidgetbar
