import React from 'react';
import './style.css';
import { AccountCircleRounded, VerifiedUserRounded, HomeRounded, FavoriteRounded } from '@material-ui/icons';

function Dashboard() {
  return (
    <div className='dashboard'>
      <h2>DASHBOARD</h2>
      <div className='dashboard-items'>
        <div className='item total-patients'>
          <AccountCircleRounded className='svg-icon account' fontSize={'large'}/>
          <div className='content-item'>
            <h3 className='content-item-title'>Total Patients</h3>
            <h3 className='content-item-data'>2.040</h3>
          </div>
        </div>
        <div className='item total-staffs'>
          <VerifiedUserRounded className='svg-icon verified' fontSize={'large'}/>
          <div className='content-item'>
            <h3 className='content-item-title'>Total Staffs</h3>
            <h3 className='content-item-data'>17.000</h3>
          </div>
        </div>
        <div className='item total-rooms'>
          <HomeRounded className='svg-icon home' fontSize={'large'} />
          <div className='content-item'>
            <h3 className='content-item-title'>Total Rooms</h3>
            <h3 className='content-item-data'>4.800</h3>
          </div>
        </div>
        <div className='item total-cars'>
          <FavoriteRounded className='svg-icon favorite' fontSize={'large'} />
          <div className='content-item'>
            <h3 className='content-item-title'>Total Cars</h3>
            <h3 className='content-item-data'>3.000</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
