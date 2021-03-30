import React from 'react';
import { Equalizer, Message, Notifications } from '@material-ui/icons';
import './style.css';

function Header() {

  return (
    <div className='header'>
      <div className='btns-text'>
        <button className='btn-text btn-add'>Add Patient</button>
        <button className='btn-text btn-treatments'>Treatments</button>
        <button className='btn-text btn-doctor'>Doctors</button>
        <button className='btn-text btn-help'>Help</button>
      </div>
      <div className='btns-icon'>
        <button className='btn-icon btn-equalizer'>
          <Equalizer className='svg-background'/>
        </button>
        <button className='btn-icon btn-message'>
          <Message className='svg-background'/>
        </button>
        <button className='btn-icon btn-notifications'>
          <Notifications className='svg-background'/>
        </button>
      </div>
    </div>
  )

};

export default Header;
