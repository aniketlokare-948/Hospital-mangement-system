import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorDashboard from "./DoctorDashboard";
import axios from "axios";

const Print = () => {
  const { id } = useParams();
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/print/${id}`)
      .then(res => {
        console.log(res.data)
        setReport(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center ">
          <div className="col">
            <div className="row text-center d-flex justify-content-center ">
              <div className="col-9 border border-1">
                <div className="row">
                  <div className="col-2 border border-1">
                    <h6>LOGO</h6>
                  </div>
                  <div className="col-10 border border-1">
                    <h5 className="text-center ">Aniket MEDI Clinic</h5>
                    <p className="text-center ">
                      Jawahar Nagar near Vitthal mandir Ichalkaranji
                    </p>
                    <p className="text-center ">Phone no:- 8763483643</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label className="float-start">
                      Patient ID:- {report.ID}
                    </label>
                    <br></br>
                    <label className="float-start">
                      Patitent name:- {report.Name}
                    </label>
                    <br></br>
                    <label className="float-start">
                      Patient age:- <span>{report.Age}</span>
                    </label>
                    <br></br>
                    <label className="float-start">
                      Address:-{report.Address}{" "}
                    </label>
                    <br></br>
                    <label className="float-start">
                      Mobile no:-{report.MobileNo}
                    </label>
                    <br></br>
                    <label className="float-start">
                      Symptoms:- {report.Simtom}
                    </label>
                  </div>
                  <div className="col-6">
                    <label>Date:- {report.Date}</label>
                  </div>
                </div>
                <div className="row mt-4">
  <h4>Prescription</h4>
  <div className="col-6">
    <div>
      <p>{report.medi1}</p>
      <p>{report.medi2}</p>
      <p>{report.medi3}</p>
      <p>{report.medi4}</p>
    </div>
  </div>
  <div className="col-6">
    <div>
      <p>{report.m1 && "morning(1)"}&nbsp;&nbsp;&nbsp;&nbsp;{report.a1 && "afternoon(1)"}&nbsp;&nbsp;&nbsp;&nbsp; {report.n1 && "night(1)"}</p>
      <p>{report.m2 && "morning(1)"}&nbsp;&nbsp;&nbsp;&nbsp;{report.a2 && "afternoon(1)"}&nbsp;&nbsp;&nbsp;&nbsp; {report.n2 && "night(1)"}</p>
      <p>{report.m3 && "morning(1)"}&nbsp;&nbsp;&nbsp;&nbsp;{report.a3 && "afternoon(1)"}&nbsp;&nbsp;&nbsp;&nbsp; {report.n3 && "night(1)"}</p>
      <p>{report.m4 && "morning(1)"}&nbsp;&nbsp;&nbsp;&nbsp;{report.a4 && "afternoon(1)"}&nbsp;&nbsp;&nbsp;&nbsp; {report.n4 && "night(1)"}</p>
    </div>
  </div>
</div>

                <div className="row d-flex justify-content-end  mt-5">
                  <div className="col-3 mt-5 ">
                    <p>Aniket lokare</p>
                    <h5>Doctor Sign</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <button className="btn btn-primary " onClick={handlePrint}>PRINT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Print;
