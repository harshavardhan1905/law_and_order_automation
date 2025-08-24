import React from 'react';
import axios from 'axios';

export default function WomenProtection() {
  
  
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
      
    </div>
  );
}
