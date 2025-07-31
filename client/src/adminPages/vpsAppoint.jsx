import React from 'react';

const VpsAppoint = (props) => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <h2 className="mb-4">Virtual Police Station Appointment</h2>
      <button className='btn btn-close' onClick={props.onClose} title='close'></button>

      <div className="row mb-3 w-100" style={{ maxWidth: '600px' }}>
        <div className="col-md-4 mb-2">
          <select className="form-select" required>
            <option>Select Location...</option>
            <option value="HYD">HYD</option>
            <option value="NAMPALLY">NAMPALLY</option>
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <select className="form-select" required>
            <option>Select Position</option>
            <option value="DGP">DGP</option>
            <option value="Constable">Constable</option>
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <select className="form-select" required>
            <option>Select Officer</option>
            <option value="harsha">Harsha - DGP</option>
            <option value="john">John - Constable</option>
            <option value="dow">Dow - SI</option>
          </select>
        </div>
      </div>

      <div>
        <button className="btn btn-outline-primary px-4">Appoint!</button>
      </div>
    </div>
  );
};

export default VpsAppoint;
