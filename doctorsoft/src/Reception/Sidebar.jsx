import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
     <div className="sidebar">
      <ul>
        <li><Link to="#"><strong className='fs-3'>DoctorInfo</strong></Link ></li>
        <li><Link to="/patientcount"><small className='fs-5 ms-1 '>Patient Count</small></Link ></li>
        <li><Link to="/patient"><small className='fs-5 ms-1'>Patient entry</small></Link ></li>
        <li><Link to="/patientreport"><small className='fs-5 ms-1'>Patient report</small></Link ></li>
       
      </ul>
    </div>
     
    </>
  )
}

export default Sidebar