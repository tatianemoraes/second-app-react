import React from 'react';
import './style.css';
import Canvas from '../../assets/canvas.png'

function Statistics() {
  return (
    <div className='statistics'>
      <h2>PATIENT STATISTICS</h2>
      <div className='canvas-content'>
        <div>
          <img className='canvas-img' src={Canvas} alt="Canvas"/>
        </div>
        <div className='datas-content'>
          <h3 className='total-patients'>Total Patients</h3>
          <h2>120</h2>
        </div>
      </div>
    </div>

  )
}



export default Statistics;
