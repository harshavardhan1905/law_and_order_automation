import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CitizenLogin() {
  const navigate = useNavigate(); // Correct way to navigate

  const handleLogin = (e) => {
    e.preventDefault();

    const userName = e.target.username.value;
    const password = e.target.password.value;
    const location = e.target.location.value;

    console.log("Username:", userName, "Password:", password, "Location:", location);

    if (userName === 'citizen' && password === '123') {
      navigate('/vps',  { state: { location } }); // Correct usage of navigation
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-light' style={{ minHeight: '100vh' }}>
      <form 
        className="bg-white p-5 rounded shadow position-relative" 
        style={{ width: '100%', maxWidth: '400px' }} 
        onSubmit={handleLogin}
      >
        <div className="position-absolute" style={{ top: '15px', right: '15px', zIndex: 10 }}>
          <Link to="/" className="btn btn-outline-primary btn-sm">Home</Link>
        </div>

        <h3 className='text-center mb-4'>🔐 Citizen Login</h3>

        <div className='form-group mb-3'>
          <label htmlFor="username">Username</label>
          <input type="text" name='username' value="citizen" className='form-control' placeholder='Username' required />
        </div>

        <div className='form-group mb-3'>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' value="123" className='form-control' placeholder='********' required />
        </div>
        <div className='form-group mb-3'>
          <select name="location" id="" className='form-select' required>
            <option value="" disabled selected>Select Location</option>
            <option value="Dundhigal">Dundhigal</option>
            <option value="Gandimaisamma">Gandimaisamma</option>
            <option value="Medchal">Medchal</option>
          </select>
        </div>

        <button type="submit" className='form-control btn btn-primary'>Login</button>

        <div className="mt-3 text-center">
          <a href="#">Sign Up?</a>
        </div>
      </form>
    </div>
  );
}
