import React from 'react'
import { useLocation } from 'react-router-dom';

export default function vpsHome() {
    const location = useLocation();
    // console.log(location.state); // To check if location state is passed correctly
  return (
    <div>
        {/* Cards Section */}
        <h5>Wellcome to <strong>{location.state.location}</strong> VPS</h5>
      <div className='container d-flex flex-wrap justify-content-center align-items-center gap-4 py-5 mt-5'>
        <div className='card shadow-sm p-4 rounded-4 bg-white' style={{ width: '300px' }}>
          <h4 className='border-bottom pb-2'>Objective</h4>
          <p>To provide a centralized and efficient system for managing law and order operations, reducing paperwork, and improving response times.</p>
        </div>

        <div className='card shadow-sm p-4 rounded-4 bg-white' style={{ width: '300px' }}>
          <h4 className='border-bottom pb-2'>Scope</h4>
          <p>This system covers various law enforcement departments including traffic, cybercrime, and general police operations across regions.</p>
        </div>

        <div className='card shadow-sm p-4 rounded-4 bg-white' style={{ width: '300px' }}>
          <h4 className='border-bottom pb-2'>Services</h4>
          <p>Includes digital FIR registration, officer communication, license applications, case tracking, and mobile-based complaint logging.</p>
        </div>

        <div className='card shadow-sm p-4 rounded-4 bg-white' style={{ width: '300px' }}>
          <h4 className='border-bottom pb-2'>Benefits</h4>
          <p>Enhanced transparency, faster case resolution, easy access to criminal records, and better coordination across law enforcement units.</p>
        </div>
      </div>
    </div>
  )
}
