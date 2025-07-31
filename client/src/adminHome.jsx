import React, { useEffect, useState } from "react";
import VpAppoint from "./adminPages/vpsAppoint";

import axios from 'axios';
import { useNavigate } from "react-router-dom";


//Fetching url data from /api/officeres
const adminDetails = "http://localhost:3001/api/admin";
const officers = "http://localhost:3001/api/officers";
const citizens = "http://localhost:3001/api/citizens";
// console.log(officers)

const AdminHome = () => {
  //it can handles the whole renders of components
  const [showAllContent, setAllShowContent] = useState(null);
  console.log(showAllContent)

  const navigate = useNavigate();

  //fetch the admin details
  const [adminDetail, setAdminDetails] = useState([]);
  const adminHandler = async () => {
    const adminData = await fetch(adminDetails);
    const admindata = await adminData.json();
    setAdminDetails(admindata)
  }
  useEffect(() => {
    // console.log(adminHandler())
    adminHandler();
  }, [])
  // console.log(adminDetail)
  // console.log(typeof adminDetail)

  //useState for getting officers data
  const [officer, setOfficers] = useState([]);
  const officerHandler = async () => {
    const response = await fetch(officers);
    const dataOfficers = await response.json();
    //invoke the setOfficer useState
    setOfficers(dataOfficers)
  }
  // console.log(officerHandler())
  useEffect(() => {
    // console.log(officerHandler());
    officerHandler();
  }, [])
  //check the data is assigned or not 
  // console.log(officer)

  //fetch the citizen data 
  const [citizen, setCitizen] = useState([]);
  const citizenHandler = async () => {
    try{
      const response = await fetch(citizens);
      const citizenData = await response.json();
      setCitizen(citizenData)
    }
    catch(error){
      console.error("failed to fetch the citizens:", error)
    }
  }
  useEffect(() => {
    citizenHandler();
  }, [])
  // console.log(typeof citizen)
  // console.log(citizen)

  ///posting data to the officers api
  const officerPostHandler =(event)=>{
    event.preventDefault();
    const officer_name = event.target.name_officer.value;
    const officer_address = event.target.address_officer.value;
    const officer_role = event.target.role_officer.value;
    const officer_working = event.target.working_officer.value
    axios.post("http://localhost:3001/add/officer", {
      officer_name,
      officer_address,
      officer_role,
      officer_working
    }).then((response) =>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })

  }

  return (
    <div className="w-100  border-bottom position-absolute top-0 start-0 z-3">

      <div className="d-flex justify-content-between align-items-center px-4 navbar  bg-dark">
        {/* Left: Heading */}
        <h1 className="m-0" style={{ fontFamily: 'Merriweather, serif', color: 'white' }}>
          Law and Order Automation..!
        </h1>

        {/* Right: Profile Button */}

        <button className="btn  btn-outline-primary" onClick={() => setAllShowContent('logOut')}>
          Log out
        </button>
        {showAllContent === 'logOut' && (
          navigate('/')
        )}

        <button className="btn  btn-outline-primary" onClick={() => setAllShowContent('profile')}>
          Profile
        </button>
        {showAllContent === 'profile' && (
          <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">User Profile</h5>
                  <button type="button" className="btn-close" onClick={() => setAllShowContent(null)}></button>
                </div>
                {adminDetail.map((d) => {
                  return (
                    <div className="modal-body">

                      <p><strong>Name:</strong>{d.name}</p>
                      <p><strong>Email:</strong> {d.gmail}</p>
                      <p><strong>Role:</strong> Admin</p>
                    </div>
                  )
                })}
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setAllShowContent(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
{/* //buttons */}
      <div class="d-flex bg-light justify-content-center">
        <button class="p-2  btn-outline-secondary" onClick={() => setAllShowContent('police-officers-data')}>Policer Officers</button>
        <button class="p-2 btn-outline-secondary" onClick={() => setAllShowContent('citizen-data')}>Citizen</button>
        <button class="p-2 btn-outline-secondary" onClick={() => setAllShowContent('appointing')}>Appointing</button>
        <button class="p-2 btn-outline-secondary">VPS create/edit</button>
      </div>

      <div id="showing_data scroll-box">
        {/* Officers data show */}
        {showAllContent === 'police-officers-data' && (
          <div class=" my-5">
            <div class="table-responsive  mx-auto  p-4 bg-light rounded">
              <h3 class="text-center mb-4">👮 Police Officers Data</h3>
              <button className="btn btn-close" title="CLose" onClick={() => setAllShowContent(null)}></button>

              <div className="container" id="addOfficer">
                <form className="d-flex w-100 gap-4 m-4" onSubmit={officerPostHandler}>
                  <div className="form-group">
                    {/* <label htmlFor="NameOfofficer">Name</label> */}

                    <input 
                    type="text" 
                    id="name_officer"
                    className="form-control" 
                    placeholder="Name of officer" />

                  </div>
                  <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    name="address_officer"
                    placeholder="Address of officer" />


                  </div>
                  <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    name="role_officer"
                    placeholder="Role of officer" 
                    />

                  </div>
                  <div className="form-group">
                    <input 
                    type="text" 
                    name="working_officer"
                    className="form-control" 
                    placeholder="working ps" 
                    />

                  </div>

                  <button type="submit" className="btn btn-success">Add officer</button>
                </form>
                
              </div>

              {/* //officers table */}
              <div className="table-box">
                <input type="text"
                  name="search"
                  placeholder="Enter officer name/id"
                  className="form-control w-25 float-end bg-white search-box"
                  />
                <table class="table table-bordered table-hover text-center bg-white">
                  
                  <thead class="thead-dark">
                    <tr>
                      <th>Officer ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Role</th>
                      <th>Working In</th>
                      <th>Appoint</th>
                    </tr>
                  </thead>
                  <tbody className="scroll-box">
                    {/* <tr>
                          <td>101</td>
                          <td>Harsha</td>
                          <td>Hyderabad</td>
                          <td>DGP</td>
                          <td>Dundigal-ps</td>
                        </tr> */}
                    {officer.map((item) => {
                      return (
                        <tr>
                          <td>{item.officer_id}</td>
                          <td>{item.name}</td>
                          <td>{item.address}</td>
                          <td>{item.role}</td>
                          <td>{item.working_in}</td>
                          <td><button class="btn btn-primary btn-sm" onClick={() => setAllShowContent('appointing')}>Appoint</button></td>

                        </tr>
                      )
                    })
                    }

                  </tbody>
                </table>
              </div>


            </div>
          </div>
        )}
        {/* Citizen data */}
        {showAllContent === 'citizen-data' && (
          <div class=" my-5">
            <div class="table-responsive  mx-auto  p-4 bg-light rounded">
              <h3 class="text-center mb-4">👮 Citizen Data</h3>
              <button className="btn btn-close" title="CLose" onClick={() => setAllShowContent(null)}></button>

              <table class="table table-bordered table-hover text-center bg-white">
                <thead class="thead-dark">
                  <tr>
                    <th>Citizen ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Role</th>
                    <th>Working In</th>
                    <th>Appoint</th>
                  </tr>
                </thead>
                <tbody> 
                  {citizen.map((item) =>{
                    return (
                      <tr>
                    <td>{item.officer_id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.role}</td>
                    <td>{item.working_in}</td>
                    <td><button class="btn btn-primary btn-sm">Appoint</button></td>
                  </tr>
                    )
                  })}
                  <tr>
                    <td>102</td>
                    <td>Arjun</td>
                    <td>Warangal</td>
                    <td>ACP</td>
                    <td>Kazipet-ps</td>
                    <td><button class="btn btn-primary btn-sm">Appoint</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Virtual police station appointing to officers */}
        {showAllContent === 'appointing' && (
          <VpAppoint onClose={() => setAllShowContent(null)} />
        )}

      </div>
    </div>
  );
};

export default AdminHome;
