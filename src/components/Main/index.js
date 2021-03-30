import React from 'react';
import './style.css';
import Dashboard from '../Dashboard/index';
import Statistics from '../Statistics/index';
import Reports from '../Reports/index';
import Balance from '../Balance/index';
import Table from '../Table/index';

function Main() {
  return(<>
    <div className='main'>
      <div className='main-left'>
        <Dashboard />
        <Statistics />
      </div>
      <div className='main-right'>
        <Reports />
        <Balance />
      </div>
    </div>
    <Table />
    </>
  )
}

export default Main;
