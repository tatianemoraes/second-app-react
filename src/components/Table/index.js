import React from 'react';
import { Edit, Delete } from '@material-ui/icons';
import './style.css';

function Table() {
  return (
    <div className='table'>
      <h2>LATEST PATIENTS</h2>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>DATE</th>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>COUNTRY</th>
            <th>GENDER</th>
            <th>SETTINGS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>22/02/2021</td>
            <td>GH-224536</td>
            <td>William Zabka</td>
            <td>24</td>
            <td>SINGAPORE</td>
            <td>MALE</td>
            <td>
              <div>
                <Edit />
                <Delete />
              </div>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>22/02/2021</td>
            <td>GH-224537</td>
            <td>Thomas Shelby</td>
            <td>21</td>
            <td>USA</td>
            <td>MALE</td>
            <td>
              <div>
                <Edit />
                <Delete />
              </div>
            </td>
          </tr>
          <tr>
          <td>02</td>
            <td>22/02/2021</td>
            <td>GH-224538</td>
            <td>Bobby Singer</td>
            <td>34</td>
            <td>INDONESIA</td>
            <td>MALE</td>
            <td>
              <div>
                <Edit />
                <Delete />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table;
