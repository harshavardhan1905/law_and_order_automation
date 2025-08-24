// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function LicenseApplicationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const applicant_name = e.target.applicant_name.value;
    const contact = e.target.contact.value;
    const application_type = e.target.licenseType.value;
    const address = e.target.address.value;
    const purpose = e.target.description.value;
    const attachments = e.target.file.value;
    if(applicant_name&&contact&&application_type&& address){
        alert("Submitted successfully!!");
        axios.post("http://127.0.0.1:3001/api/post/licence_applications",{
            applicant_name,
            contact,
            application_type,
            address,
            purpose,
            attachments
        })
    }

  };
  

  return (
    <div className="container mt-4 p-4 shadow bg-light rounded">
      <h2 className="text-center text-primary mb-4">
        License Application Form
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Applicant Name */}
        <div className="mb-3">
          <label className="form-label">Applicant Name</label>
          <input
            type="text"
            className="form-control"
            name="applicant_name"
            
          />
        </div>

        {/* Contact Number */}
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="tel"
            className="form-control"
            name="contact"
            
            // onChange={handleChange}
            // required
          />
        </div>

        {/* License Type */}
        <div className="mb-3">
          <label className="form-label">License Type</label>
          <select
            className="form-select"
            name="licenseType"
            
            // onChange={handleChange}
            // required
          >
            <option value="">-- Select License Type --</option>
            <option value="sound_speakers">Sound Speakers Permission</option>
            <option value="event">Public Event</option>
            <option value="arms">Arms License</option>
            <option value="fireworks">Fireworks</option>
            <option value="vehicle_rally">Vehicle Rally</option>
          </select>
        </div>

        {/* Date */}
        <div className="mb-3">
          <label className="form-label">Event / Usage Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            
            // onChange={handleChange}
            // required
          />
        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="form-label">Address / Event Location</label>
          <textarea
            className="form-control"
            name="address"
            rows="2"
            
            // onChange={handleChange}
            // required
          ></textarea>
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Purpose / Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            
            // onChange={handleChange}
            // required
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="mb-3">
          <label className="form-label">Attach Document (PDF/Image)</label>
          <input
            type="file"
            className="form-control"
            name="file"
            accept=".pdf, .jpg, .jpeg, .png"
            // onChange={handleChange}
            
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
