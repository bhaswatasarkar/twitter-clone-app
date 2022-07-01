import React from 'react'
import './Rightwidgetbar.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NewsList from './NewsList';
function Rightwidgetbar() {
  return (
    <div className='rightwidgetbar'>
      <div className='widget-input'>
        <SearchRoundedIcon className='widget-search-icon'/>
        <input placeholder='Search Twitter' className='widget-search-text'></input>
      </div>

      <div className='news-container'>
        <div className='news-container-header'>What's happening</div>
        <div className='news-components'>
          <NewsList/>
          
        </div>
        <div className='news-container-footer'>Show more</div>
      </div>

    </div>
  )
}

export default Rightwidgetbar
