import React, { useEffect, useState } from "react";
import DoctorDashboard from "./DoctorDashboard";
import { useParams } from "react-router-dom";
import axios from "axios";

const Doctormedi = () => {
  const { id } = useParams();

  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctormedi/${id}`)
      .then((res) => {
        console.log(res.data);
        setReport(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const [values, setValues] = useState({
    ID: id,
    Date: "",
    medi1: "",
    medi2: "",
    medi3: "",
    medi4: "",
    m1: false,
    a1: false,
    n1: false,
    m2: false,
    a2: false,
    n2: false,
    m3: false,
    a3: false,
    n3: false,
    m4: false,
    a4: false,
    n4: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios.post('http://localhost:5000/doctormedicine', values)
      .then(res => {
        console.log(res.data);
        console.log("data submitted");
        // You can redirect the user or show a success message here
      })
      .catch(err => {
        console.error(err);
        // You can display an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <DoctorDashboard />
          </div>
          <div className="col-10">
            <h3>This is doctor medi page</h3>
            <div className="row text-center d-flex justify-content-center">
              <div className="col-9 border border-1">
                <div className="row">
                  <div className="col-2 border border-1">
                    <h1>LOGO</h1>
                  </div>
                  <div className="col-10 border border-1">
                    <h1 className="text-center">Aniket MEDI Clinic</h1>
                    <p className="text-center">
                      Jawahar Nagar near Vitthal mandir Ichalkaranji
                    </p>
                    <p className="text-center">Phone no:- 8763483643</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label className="float-start">Patient ID:- {report.ID} </label>
                    <br />
                    <label className="float-start">Patient name:- {report.Name}</label>
                    <br />
                    <label className="float-start">Patient age:- {report.Age}</label>
                    <br />
                    <label className="float-start">Address:-{report.Address} </label>
                    <br />
                    <label className="float-start">Mobile no:-{report.MobileNo}</label>
                    <br />
                    <label className="float-start">Symptoms:- {report.Simtom}</label>
                  </div>
                  <div className="col-6">
                    <label>Date:- </label>
                    <input className="form-control" type="date" onChange={(e) => setValues({...values, Date: e.target.value})} />
                  </div>
                </div>
                <div className="row mt-4">
                  <h4>Prescription</h4>
                  <div className="col-3">
                    <input className="form-control mt-5" type="text" onChange={(e) => setValues({...values, medi1: e.target.value})} />
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.m1} name="m1" onChange={handleChange} />
                      <label className="form-check-label me-5">Morning (1)</label>
                    </div>
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.a1} name="a1" onChange={handleChange} />
                      <label className="form-check-label me-5">Afternoon (1)</label>
                    </div>
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.n1} name="n1" onChange={handleChange} />
                      <label className="form-check-label me-5">Night (1)</label>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3">
                    <input className="form-control mt-5" type="text" onChange={(e) => setValues({...values, medi2: e.target.value})} />
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.m2} name="m2" onChange={handleChange} />
                      <label className="form-check-label me-5">Morning (1)</label>
                    </div>
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.a2} name="a2" onChange={handleChange} />
                      <label className="form-check-label me-5">Afternoon (1)</label>
                    </div>
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.n2} name="n2" onChange={handleChange} />
                      <label className="form-check-label me-5">Night (1)</label>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3">
                    <input className="form-control mt-5" type="text" onChange={(e) => setValues({...values, medi3: e.target.value})} />
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.m3} name="m3" onChange={handleChange} />
                      <label className="form-check-label me-5">Morning (1)</label>
                    </div>
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.a3} name="a3" onChange={handleChange} />
                      <label className="form-check-label me-5">Afternoon (1)</label>
                    </div>
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.n3} name="n3" onChange={handleChange} />
                      <label className="form-check-label me-5">Night (1)</label>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-3">
                    <input className="form-control mt-5" type="text" onChange={(e) => setValues({...values, medi4: e.target.value})} />
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.m4} name="m4" onChange={handleChange} />
                      <label className="form-check-label me-5">Morning (1)</label>
                    </div>
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.a4} name="a4" onChange={handleChange} />
                      <label className="form-check-label me-5">Afternoon (1)</label>
                    </div>
                  </div>
                  <div className="col-3 mt-5 ">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" checked={values.n4} name="n4" onChange={handleChange} />
                      <label className="form-check-label me-5">Night (1)</label>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-end mt-5">
                  <div className="col-3 mt-5 ">
                    <p>Aniket lokare</p>
                    <h5>Doctor Sign</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <button className="btn btn-primary">SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Doctormedi;
