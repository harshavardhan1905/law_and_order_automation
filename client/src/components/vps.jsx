import React, { useEffect } from 'react'
import { useState } from 'react';
import LawOrder from './componentsvps/lawOrder';
import WomenProtection from './componentsvps/womenProtection';
import CyberCrime from './componentsvps/cyberCrime';
import Footer from './footer';
import VpsHome from './componentsvps/vpsHome';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Complaints from './componentsvps/complaints';
import Criminal_info from './componentsvps/criminal_info'
import Evidence from './componentsvps/evidence';


export default function vps() {
  const [page, setPage] = useState(null);
  const [location_param, setLocation_param] = useState('');
  // const [department, setDepartment] = useState();
  const location = useLocation();
  const userLocation = location.state?.location || "Unknown"; 
  // console.log(location.state); // To check if location state is passed correctly
  // console.log(page)

  //assigning params to location, department as page
  useEffect(() => {
    setLocation_param(userLocation)

}, [location_param, page]);

  return (
    <div>
      <div className="w-100 bg-dark d-flex justify-content-between align-items-center px-4 py-2 fixed-top">
        <p className="text-white m-0">📍{userLocation}, Hyd</p>
        <p className="text-white m-0">Citizen-Virtual Police Station</p>
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
                <a className="nav-link dropdown-toggle " href="#" id="departmentsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Departments
                </a>
                <ul className="dropdown-menu" aria-labelledby="departmentsDropdown">
                  <li><a className="dropdown-item" href="#"  onClick={()=>{setPage('lawOrder')}}> Law and Order</a>
                  
                  </li>
                  <li><a className="dropdown-item" href="#" onClick={()=>{setPage('womenProtection')}}>Women Protection</a></li>
                  <li><a className="dropdown-item" href="#" onClick={()=>{setPage('cyberCrime')}}>Cyber Crime</a></li>
                </ul>
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
                  <li><a className="dropdown-item" href="#">Citizen Dashboard (Arms, DJ, Events)</a></li>
                  <li><a className="dropdown-item" href="#">Licence Status</a></li>
                  <li><a className="dropdown-item" href="#">Other Requests</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Conditional rendering based on the selected page */}
      { page === null && <VpsHome /> }
      { page==='lawOrder' && <LawOrder department={page} location={location_param}/> }
      { page === 'womenProtection' && <WomenProtection /> }
      { page === 'cyberCrime' && <CyberCrime /> }
      { page ==='complaints' && <Complaints/>}
      { page ==='criminal_info' && <Criminal_info/>}
      { page ==='evidence' && <Evidence/>}
      <Footer />
    </div>
  )
}
