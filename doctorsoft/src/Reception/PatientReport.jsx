import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";


const PatientReport = () => {

    const [pdata, setPdata] = useState([])
    const [records,setRecords] = useState([])

 
useEffect(() => {
  fetchdata();

},[])

 const fetchdata = () =>{
  axios.get('http://localhost:5000/patientreport')
  .then((res) => {
    console.log(res);
    setPdata(res.data);
    setRecords(res.data)
  })
  
  .catch((err) => {
    console.log("error in fetch data",err)
  })
 }






const handleDelete = (id) => {
  axios.delete(`http://localhost:5000/delete/${id}`)
  .then((res) =>{
    fetchdata();
  })

  .catch((err) => {
    console.log("err in the delete",err)
  })
}


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"> <Sidebar></Sidebar></div>
          <div className="col-10">
            <h1>This is patitent report</h1>
            <table className="table table-bordered ">
 <thead>
    <tr>
        <th>Sr no</th>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Mobile No</th>
        <th>Symtom</th>
        <th>Action</th>
        <th>Delete Entry</th>
        
    </tr>
 </thead>
 <tbody>
    {pdata.map((report, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{report.ID}</td>
            <td>{report.Name}</td>
            <td>{report.Age}</td>
            <td>{report.Address}</td>
            <td>{report.MobileNo}</td>
            <td>{report.Simtom}</td>
            <td><Link to={`http://localhost:3000/patientedit/${report.ID}`} className="btn btn-primary">EDIT</Link></td>
            <td><button onClick={() => handleDelete(report.ID)} className="btn btn-danger ">Delete</button></td>
            
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

export default PatientReport;
