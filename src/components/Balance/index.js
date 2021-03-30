import React from 'react';
import './style.css';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

function Balance() {
  return (
    <div className='balance'>
      <h2>BALANCE</h2>
      <div className='contents-2'>
        <div className='content-21'>
          <ArrowUpward className='svg-up'/>
          <div className='content-text-2'>
            <h3 className='text-h3'>Income</h3>
            <h4>$120.000</h4>
          </div>
        </div>
        <div className='content-22'>
          <ArrowDownward className='svg-down'/>
          <div className='content-text-2'>
            <h3 className='text-h3'>Outcome</h3>
            <h4>$80.000</h4>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Balance;
