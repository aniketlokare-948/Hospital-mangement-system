import React, { useEffect, useState } from 'react'
import axios from "axios";
import DoctorDashboard from './DoctorDashboard';
import { Link } from "react-router-dom";

const FinalPatientReport = () => {
 
   const [ pdata, setPdata] = useState([]);

   useEffect(() => {
axios.get('http://localhost:5000/finalpatientreport')
.then(res => {
  console.log(res.data);
  setPdata(res.data);
})
.catch(err =>{
  console.log(err);
})
   },[])


    return (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-2"><DoctorDashboard></DoctorDashboard></div>
              <div className="col-10">
                <h1>This is patitent report</h1>
                <table className="table table-bordered ">
     <thead>
        <tr>
            <th>Sr no</th>
            <th>Number</th>
            <th>Id</th>
            <th>Date</th>
            <th>medicine 1</th>
            <th>medicine 2</th>
            <th>medicine 3</th>
            <th>medicine 4</th>
            <th>morning</th>
            <th>afternoon</th>
            <th>night</th>
            <th>morning</th>
            <th>afternoon</th>
            <th>night</th>
            <th>morning</th>
            <th>afternoon</th>
            <th>night</th>
            <th>morning</th>
            <th>afternoon</th>
            <th>night</th>
            <th>Print</th>
            
        </tr>
     </thead>
     <tbody>
        {pdata.map((report, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{report.number}</td>
                <td>{report.ID}</td>
                <td>{report.Date}</td>
                <td>{report.medi1}</td>
                <td>{report.medi2}</td>
                <td>{report.medi3}</td>
                <td>{report.medi4}</td>
                <td>{report.m1}</td>
                <td>{report.a1}</td>
                <td>{report.n1}</td>
                <td>{report.m2}</td>
                <td>{report.a2}</td>
                <td>{report.n2}</td>
                <td>{report.m3}</td>
                <td>{report.a3}</td>
                <td>{report.n3}</td>
                <td>{report.m4}</td>
                <td>{report.a4}</td>
                <td>{report.n4}</td>
                <td><Link to={`http://localhost:3000/print/${report.number}`} className="btn btn-success">Print</Link></td>
                
            </tr>
        ))}
     </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      );
    };

export default FinalPatientReport