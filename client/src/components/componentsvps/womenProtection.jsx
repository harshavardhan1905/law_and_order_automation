import React from 'react';
import axios from 'axios';

export default function WomenProtection() {
  const reportHandler = (event)=>{
    event.preventDefault();
    const victim_name = event.target.victim_name.value;
    const victim_contact = event.target.victim_contact.value;
    const date = event.target.date_of_incident.value;
    const criminalName = event.target.criminal_name.value;
    const victim_location = event.target.victim_location.value;
    const criminalType = event.target.criminal_type.value;
    const victim_description = event.target.victim_description.value;
    
    if(victim_name&&victim_contact && victim_location && victim_description){
      alert("Submitted successfully")
      // console.log("from im",victim_name, victim_location, victim_description)
      axios.post("http://127.0.0.1:3001/api/post/women_protection/case",{
        victim_name,
        victim_contact,
        date,
        criminalName,
        victim_location,
        criminalType,
        victim_description
      }).then((response)=>{
        console.log(response);
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
  
  
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="text-danger fw-bold">Women Protection Cell</h2>
        <p className="text-muted">Ensuring Safety, Empowerment & Support for Every Woman</p>
      </div>

      {/* Emergency Contacts */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-danger text-white">
          <h5>Emergency Helplines</h5>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span>Women Helpline (All India)</span>
              <span className="fw-bold">1091</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Police Control Room</span>
              <span className="fw-bold">100</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Cyber Crime Helpline</span>
              <span className="fw-bold">1930</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Safety Tips */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-secondary text-white">
          <h5>Women's Safety Tips</h5>
        </div>
        <div className="card-body">
          <ul>
            <li>Always share your location with trusted contacts.</li>
            <li>Avoid isolated areas during night-time.</li>
            <li>Install safety apps with SOS features.</li>
            <li>Report any suspicious behavior immediately.</li>
          </ul>
        </div>
      </div>

      {/* Report Incident Form */}
      <div className="card shadow-sm mb-5">
        <div className="card-header bg-dark text-white">
          <h5>Report an Incident</h5>
        </div>
        <div className="card-body">
          <form onSubmit={reportHandler}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name (Optional)</label>
              <input type="text" className="form-control" name="victim_name" id="victim_name" placeholder="Enter your name (if comfortable)" />
            </div>
            <div className="mb-3">
              <label htmlFor="victim_contact" className="form-label">Your Contact</label>
              <input type="text" className="form-control" name="victim_contact" id="victim_contact" placeholder="Enter your contact" />
            </div>
            <div className="mb-3">
              <label htmlFor="date_of_incident" className="form-label">Date of Incident</label>
              <input type="date" className="form-control" name="date_of_incident" id="date_of_incident" placeholder="Date" />
            </div>
            <div className="mb-3">
              <label htmlFor="criminal_name" className="form-label">Criminal Name</label>
              <input type="text" className="form-control" name="criminal_name" id="criminal_name" placeholder="Enter criminal name" />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input type="text" className="form-control" name='victim_location' id="victim_location" placeholder="Incident location" required />
            </div>
            <div className="mb-3">
              <label htmlFor="criminal_type" className="form-label">Incident type</label>
              <select name="criminal_type" id="criminal_type" className='form-control' required>
                <option value="Select crime type" default disabled>select</option>
                <option value="Rape case">rape case</option>
                <option value="Theft">theft</option>
                <option value="Drunk">drunk</option>
                <option value="Cyber">cyber</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="details" className="form-label">Incident Details</label>
              <textarea className="form-control" name='victim_description' id="victim_description" rows="4" placeholder="Describe the incident..." required></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Submit Report</button>
          </form>
        </div>
      </div>
    </div>
  );
}
