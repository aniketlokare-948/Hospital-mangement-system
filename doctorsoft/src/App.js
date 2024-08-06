import React from 'react';
import Login from './Reception/Login';
import SignUp from './Reception/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './Landingpage';
import Dashboard from './Reception/Dashboard';
import Sidebar from './Reception/Sidebar';
import Home from './Reception/Home';
import Patient from './Reception/Patient';
import PatientReport from './Reception/PatientReport';
import PatientEdit from './Reception/PatientEdit';
import DoctorDashboard from './Reception/DoctorDashboard';
import DoctorpatientReport from './Reception/DoctorpatientReport';
import Doctormedi from './Reception/Doctormedi';
import FinalPatientReport from './Reception/FinalPatientReport';
import Print from './Reception/Print';

function App() {
  return (
    <>
    
   <BrowserRouter>
   {/* <Sidebar></Sidebar> */}
   {/* <DoctorDashboard></DoctorDashboard> */}
     <Routes>
      <Route path='/' element={<Landingpage></Landingpage>}></Route>
      <Route path='/patient' element={<Patient></Patient>}></Route>
      <Route path='/patientcount' element={<Home></Home>}></Route>
      <Route path='/sidebar' element={<Sidebar></Sidebar>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/patientreport' element={<PatientReport></PatientReport>}></Route>
      <Route path='/patientedit/:id' element={<PatientEdit></PatientEdit>}></Route>
       <Route path='/doctordashboard' element={<DoctorDashboard></DoctorDashboard>}></Route>
       <Route path='/doctorpatientReport' element={<DoctorpatientReport></DoctorpatientReport>}></Route>
       <Route path='/doctormedi/:id' element={<Doctormedi></Doctormedi>}></Route>
       <Route path='/finalpatientreport' element={<FinalPatientReport></FinalPatientReport>}></Route>
       <Route path='/print/:id' element={<Print></Print>}></Route>
     </Routes>
   </BrowserRouter>   

    </>
  );
}

export default App;
