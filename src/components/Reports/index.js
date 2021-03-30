import React from 'react';
import { EmojiObjects, Tv  } from '@material-ui/icons';
import './style.css'

function Reports() {
  return (
    <div className='reports'>
      <h2 className='title-reports'>REPORTS</h2>
      <div className='contents'>
        <div className='content-1'>
          <EmojiObjects className='emoji'/>
          <h2 className='content-text'>2nd Floor Bathroom Had A Broken Door</h2>
        </div>
        <div className='content-2'>
          <Tv className='tv'/>
          <h2 className='content-text'>Brownout in The Administration Room</h2>
        </div>
        <div className='content-3'>
          <EmojiObjects className='emoji2'/>
          <h2 className='content-text'>1st Floor Bathroom Had A Broken Door</h2>
        </div>
      </div>
    </div>
  )
}

export default Reports;
