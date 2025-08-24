import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Firs from './components/firs'

export default function officer_vps() {
    const [page, setPage] = useState([]);
    const location = useLocation();
     const officerLocation = location.state?.location;
     console.log(officerLocation)
  return (
    <div>
        <div className="w-100 bg-dark d-flex justify-content-between align-items-center px-4 py-2 fixed-top">
        <p className="text-white m-0">📍{officerLocation}, Hyd</p>
        <p className="text-white m-0">Officer-Virtual Police Station</p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm  w-100">
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold text-primary" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" onClick={() =>{ setPage('firs')}} href="#" id="departmentsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  File FIR
                </a>    
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="complaintDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Complaint Life Cycle
                </a>
                <ul className="dropdown-menu" aria-labelledby="complaintDropdown">
                  <li><a className="dropdown-item" href="#" onClick={()=>{setPage('complaints')}}>Complaint</a></li>
                  <li><a className="dropdown-item" href="#">Case Status Tracking</a></li>
                  <li><a className="dropdown-item" href="#" onClick={()=>{setPage('evidence')}}>Case Evidence/Documents</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="criminalDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Criminal Information
                </a>
                <ul className="dropdown-menu" aria-labelledby="criminalDropdown">
                  <li><a className="dropdown-item" href="#" onClick={()=>{setPage('criminal_info')}}>State/Area/Age-wise Records</a></li>
                  <li><a className="dropdown-item" href="#">Crime Heatmap Generation</a></li>
                  <li><a className="dropdown-item" href="#">Repeat Offender Flagging</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="licenseDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Licence Management
                </a>
                <ul className="dropdown-menu" aria-labelledby="licenseDropdown">
                  <li><a className="dropdown-item" href="#" onClick={()=> setPage('licence-form')}>Citizen Dashboard (Arms, DJ, Events)</a></li>
                  <li><a className="dropdown-item" href="#" onClick={()=>{ setPage('licence-status')}}>Licence Status</a></li>
                  <li><a className="dropdown-item" href="#">Other Requests</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      { page === 'firs' && <Firs/>}
    </div>
    
  )
}
