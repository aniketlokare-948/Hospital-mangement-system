import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [alert, setAlert] = useState("");
  const [test, setTest] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const val = (v) => (e) => {
    setValues({ ...values, [v]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/login", values)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "User not found") {
          setTest(" Invalid email or password"); 
        } else if (res.data.message === "user is present") {
          setTest(""); 
          setAlert("Successfully logged in");
          console.log("Successfully");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.error(err);
        
      });
  };
  
  
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container border mt-5" style={{ minHeight: "60vh" }}>
        {test && (
  <div
    className="alert alert-warning alert-dismissible fade show"
    role="alert"
  >
    <strong>Oops!</strong>
    {test}
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
)}

          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1 className="text-center">Login</h1>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter the email"
                  required
                  onChange={val("email")}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter the password"
                  required
                  onChange={val("password")}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm px-4 py-2"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center l">
        <div className="col-md-6 text-center">
    <Link className="btn btn-primary btn-sm  mt-5 px-4 py-2 " to="/signup">
      Go Back
    </Link>
  </div>
</div>

      </form>
    </>
  );
};

export default Login;
