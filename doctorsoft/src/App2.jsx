import React from 'react';
import Login from './Reception/Login';
import SignUp from './Reception/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './Landingpage';
import DoctorDashboard from './Reception/DoctorDashboard';
import DoctorpatientReport from './Reception/DoctorpatientReport';


function App2() {
  return (
    <>
    
   <BrowserRouter>
   {/* <Sidebar></Sidebar> */}
   <DoctorDashboard></DoctorDashboard>
     <Routes>
      <Route path='/' element={<Landingpage></Landingpage>}></Route>
      
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      
       <Route path='/doctordashboard' element={<DoctorDashboard></DoctorDashboard>}></Route>
       <Route path='/doctorpatientReport' element={<DoctorpatientReport></DoctorpatientReport>}></Route>
       
     </Routes>
   </BrowserRouter>   

    </>
  );
}

export default App2;
