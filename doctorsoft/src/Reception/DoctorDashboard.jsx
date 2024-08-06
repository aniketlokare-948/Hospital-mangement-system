import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom'

const DoctorDashboard = () => {
  return (
    <>
     <div className="sidebar">
      <ul>
        <li><Link to="#"><strong className='fs-3'>DoctorInfo</strong></Link ></li>
        
        <li><Link to="/doctorpatientreport"><small className='fs-5 ms-1'>Patient Report</small></Link ></li>
        <li><Link to="/finalpatientreport"><small className='fs-5 ms-1'>Final Patient Report</small></Link></li>
      </ul>
    </div>
    
    </>
  )
}

export default DoctorDashboard