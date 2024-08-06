import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const Home = () => {
  const [tss, setTss] = useState(0); // Initialize state with 0

  useEffect(() => {
    // Fetch patient record count from the server
    axios.get('http://localhost:5000/patientrecord')
      .then(res => {
        console.log(res.data);
        // Update the state with the count received from the server
        setTss(res.data[0]['COUNT(ID)']);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="container-fluid">
      <div className="row justify-content-center"> {/* Center the row horizontally */}
        <div className="col-3"><Sidebar></Sidebar></div>
        <div className="col-9">
          <div className="row d-flex justify-content-center  ">
            <div className="col-4 mt-5">
              <div className="card mx-auto"> {/* Center the card horizontally */}
                <h3 className="text-center">Total Patient</h3>
                <h4 className="text-center">{tss}</h4> {/* Display the count */}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
