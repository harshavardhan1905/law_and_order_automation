import React, { useEffect, useState } from "react";
import VpAppoint from "./adminPages/vpsAppoint";
import Vps from "../src/components/vps"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Footer from "./components/footer";


//Fetching url data from /api/officeres
const adminDetails = "http://localhost:3001/api/admin";
const officers = "http://localhost:3001/api/officers";

// console.log(officers)

const AdminHome = () => {
  //it can handles the whole renders of components
  const [showAllContent, setAllShowContent] = useState(null);
  console.log(showAllContent)

  const navigate = useNavigate();

  //fetch the admin details
  const [adminDetail, setAdminDetails] = useState([]);
  let passStatus;
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
  // console.log(typeof officer)
  // console.log(officerHandler())
  useEffect(() => {
    // console.log(officerHandler());
    officerHandler();
  }, [])
  //check the data is assigned or not 
  console.log(officer)

  //fetch the citizen data 
  
  const [citizen, setCitizen] = useState([]);
  const citizenHandler = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/citizens');
      console.log(response)
      const citizenData = await response.json();
      setCitizen(citizenData)
      console.log(citizen)
    }
    catch(error) {
      console.error("failed to fetch the citizens:", error)
    }
  }
  useEffect(() => {
    citizenHandler();
  }, [])
  // console.log(typeof citizen)
  // console.log(citizen)
  const [password, setPassword] = useState([])
  const [Confirmpassword, setConfirmpassword] = useState([])
  
console.log(password)
  ///posting data to the officers api
  const officerPostHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.password.value)
    const officer_name = event.target.name_officer.value;
    const officer_address = event.target.address_officer.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const Conpass = event.target.Confirmpassword.value;
    const officer_role = event.target.role_officer.value;
    const officer_working = event.target.working_officer.value
    
    // console.log(officer_name)
    
    
    if(password===Conpass){
      passStatus = <span style={{"color":"Green", "fontSize":"12px"}}>Password matched</span>;
      axios.post("http://localhost:3001/add/officer", {
      officer_name,
      officer_address,
      email,
      password,
      officer_role,
      officer_working
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })

  }
  else{
    alert("Password doesn't match")
    passStatus = <span style={{"color":"red", "fontSize":"12px"}}>Please enter same password</span>;
  }
    }

  //button add officer disable
  // const [isDisabled, setIsDisabled] = useState(false);
  // const addOfficerHandler = () => {
  //   setIsDisabled(true);
  // }

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
        <button class="p-2 btn-outline-secondary" onClick={() => setAllShowContent('vps')}>VPS create/edit</button>
      </div>

      <div id="showing_data scroll-box">
        {/* Officers data show */}
        {showAllContent === 'police-officers-data' && (
          <div class=" my-5">
            <div class="table-responsive  mx-auto  p-4 bg-light rounded">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 class="text-center mb-4">👮 Police Officers Data</h3>
                <button className="btn btn-close" title="CLose" onClick={() => setAllShowContent(null)}></button>
              </div>

              <div className="container" id="addOfficer">
                <form className="d-flex w-100 gap-4 m-4" onSubmit={officerPostHandler}>
                  <div className="form-group">
                    {/* <label htmlFor="NameOfofficer">Name</label> */}

                    <input
                      type="text"
                      id="name_officer"
                      name="name_officer"
                      className="form-control"
                      placeholder="Name of officer" />

                  </div>
                  <div className="form-group">
                    <input
                    type="text" 
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter gmail"/>
                  </div>
                  <div className="form-group">
                    <input type="text" 
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Set password" />
                  </div>
                    <div className="form-group">
                    <input type="text" 
                    id="Confirmpassword"
                    name="Confirmpassword"
                    className="form-control"
                    placeholder="Confirm password"
                    />
                    
              {passStatus}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="address_officer"
                      name="address_officer"
                      placeholder="Address of officer" />


                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="role_officer"
                      name="role_officer"
                      placeholder="Role of officer"
                    />

                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="working_officer"
                      id="working_officer"
                      className="form-control"
                      placeholder="working ps"
                    />

                  </div>

                  <button type="submit" className="btn btn-success" >Add officer</button>
                </form>

              </div>

              {/* //officers table */}
              <div className="m-4 p-3 bg-light rounded">
                <input
                  type="text"
                  name="search"
                  placeholder="Search by name"
                  className="form-control w-25 float-end bg-white search-box"
                />
              </div>

              <div className="table-box mb-5 m-4">

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
                        <tr style={{ height: "10px" }}>
                          <td>{item.officer_id}</td>
                          <td>{item.name}</td>
                          <td>{item.address}</td>
                          <td>{item.role}</td>
                          <td>{item.working}</td>
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
                    <th>Citizen Name</th>
                    <th>Citizen Email</th>
                    <th>Citizen Address</th>
                    <th>Phone</th>
                  
                    <th>Case</th>
                  </tr>
                </thead>
                <tbody>
                  {citizen.map((item) => {
                    return (
                      <tr >
                        <td>{item.citizen_id}</td>
                        <td>{item.citizen_name}</td>
                        <td>{item.citizen_email}</td>
                        <td>{item.citizen_address}</td>
                        <td>{item.citizen_phone}</td>
                        <td><button class="btn btn-primary btn-sm">Cases</button></td>
                      </tr>
                    )
                  })}
                  
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Virtual police station appointing to officers */}
        {showAllContent === 'appointing' && (
          <VpAppoint onClose={() => setAllShowContent(null)} />
        )}
        {
          showAllContent === 'vps' && (
            <Vps onClose={() => setAllShowContent(null)} />
          )
        }

      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminHome;
