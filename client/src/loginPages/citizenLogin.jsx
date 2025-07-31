import React from 'react'
import { Link } from 'react-router-dom'

export default function citizenLogin() {
  return (
    <div className='justify-content-center d-flex align-items-center bg-light' style={{width:'400px'}}>
      <form className="bg-white p-5 rounded shadow position-relative" style={{ width: '100%', maxWidth: '400px' }}>
         <div
      className="position-absolute"
      style={{ top: '15px', right: '15px', zIndex: 10 }}  // Adjust as needed
    >
      <Link to="/" className="btn btn-outline-primary btn-sm">Home</Link>
    </div>

        <h3 className='text-center mb-4'> 🔐 Citizen Login</h3>

        <div>
          <div className='from-grp mb-3'>
            <label htmlFor="citizenLogin">Username</label>
            <input type="text" id='citizenLogin' className='form-control' placeholder='Username' />
          </div>
          <div className='form-grp mb-3'>
            <label htmlFor="citizenPassword">Password</label>
            <input type="text" id='citizenPassword' className='form-control' placeholder='********' />
          </div>

          <button className='form-control btn btn-primary'>Login</button>
          <div>
            <a href="#">Sign Up?</a>
          </div>
        </div>
      </form>
    </div>
  )
}
