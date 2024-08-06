import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const val = (v) => (e) => {
    setValues({...values, [v]:e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/receptionist', values)
      .then(res => {
        console.log(res.data);
        console.log("data submitted");
        // You can redirect the user or show a success message here
      })
      .catch(err => {
        console.error(err);
        // You can display an error message to the user
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container border mt-5" style={{ minHeight: "60vh" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className='text-center'>Sign Up</h1>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Enter the name" required onChange={val('name')} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email ID</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter the email"  required  onChange={val("email")} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="Enter the password"  required onChange={val("password")} />
            </div>
            <div className="text-center">
              <button type='submit' className='btn btn-primary btn-sm px-4 py-2'>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center s">
        <div className="col-md-6 text-center">
    <Link className="btn btn-primary btn-sm  mt-4 px-4 py-2 " to="/login">
      Login
    </Link>
  </div>
</div>
    </form>
  );
}

export default SignUp;
