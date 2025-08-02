import React from 'react'
import { Link } from 'react-router-dom'

export default function officerLogin() {
  return (
    <div className='justify-content-center d-flex align-items-center bg-light' style={{ width: '400px' }}>
  <form
    action=""
    className='rounded bg-white p-5 shadow position-relative'  // <== Add position-relative
    style={{ width: '100%', maxWidth: '400px' }}
  >
    {/* Home Button Positioned Inside Form */}
    <div
      className="position-absolute"
      style={{ top: '15px', right: '15px', zIndex: 10 }}  // Adjust as needed
    >
      <Link to="/" className="btn btn-outline-primary btn-sm">Home</Link>
    </div>

    <div>
      <h3 className='text-center mb-4'>🔐 Officer Login</h3>
    </div>

    <div className='form-group mb-4'>
      <label htmlFor="username">Username</label>
      <input type="text" id='username' className='form-control' placeholder='username' />
    </div>
    <div className='form-group mb-4'>
      <label htmlFor="password">Password</label>
      <input type="password" id='password' className='form-control' placeholder='password' />
    </div>
    <div className='form-group mb-3'>
          <select name="location" id="" className='form-select' required>
            <option value="" disabled selected>Select Location</option>
            <option value="Dundhigal">Dundhigal</option>
            <option value="Gandimaisamma">Gandimaisamma</option>
            <option value="Medchal">Medchal</option>
          </select>
        </div>
    <button className='btn btn-primary form-control mb-2'>Login</button>
    <div>
      <a href="#">Sign Up?</a>
    </div>
  </form>
</div>

  )
}
