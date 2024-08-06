import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

const PatientEdit = () => {
  const { id } = useParams();
  const [adata, setAdata] = useState([]);
  const [values, setValues] = useState({
    ID: "",
    Name: "",
    Age: "",
    Address: "",
    MobileNo: "",
    Simtom: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/editpatientfetch/${id}`)
      .then(res => {
        console.log(res.data);
        setAdata(res.data[0]);
        // Setting the initial values here
        setValues(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const val = (v) => (e) => {
    setValues({ ...values, [v]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/patientedit/${id}`, values)
      .then(res => {
        console.log(res.data);
        console.log("data submitted");
        navigate('/patientreport');
        // You can redirect the user or show a success message here
      })
      .catch(err => {
        console.error(err);
        // You can display an error message to the user
      });
  };

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-2"><Sidebar /></div>
            <div className="col-10">
              <h1>Patient page</h1>
              <div className="row mt-3">
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label"><strong className='fs-5'>ID</strong></label>
                    <input type="number" defaultValue={adata.ID} className="form-control" name='ID' onChange={val('ID')} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><strong className='fs-5'>Name</strong></label>
                    <input type="text" defaultValue={adata.Name} className="form-control" name='Name' onChange={val('Name')} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><strong className='fs-5'>Age</strong></label>
                    <input type="number" defaultValue={adata.Age} className="form-control" name='Age' id="age" onChange={val('Age')} />
                  </div>
                  <button type='submit' className='btn btn-success '>Submit</button>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label"><strong className='fs-5'>Address</strong></label>
                    <input type="text" defaultValue={adata.Address} className="form-control" id="address" name='Address' onChange={val('Address')} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><strong className='fs-5'>Mobile No</strong></label>
                    <input type="number" defaultValue={adata.MobileNo} className="form-control" id="number" name='MobileNo' onChange={val('MobileNo')} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label"><strong className='fs-5'>Symptom</strong></label>
                    <input type="text" defaultValue={adata.Simtom} className="form-control" id="symptom" name='Simtom' onChange={val('Simtom')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PatientEdit;
