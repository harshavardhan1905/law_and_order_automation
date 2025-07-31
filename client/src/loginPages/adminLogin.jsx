import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHome from '../adminHome';

export default function adminLogin() {

  //handle the credentials 
  const [username, setUsername] = useState('');
  // console.log(username)
  const [password, setPassword] = useState('');
  // console.log(password)

   const navigate = useNavigate();

   const handleLogin = (e) => {
    e.preventDefault();
    if(username === 'admin' && password==='123'){
      console.log("succ")
      navigate('/adminHome')
    }
    else{
       alert('Invalid credentials');
    }
   }
  return (
    <div className="d-flex justify-content-center align-items-center bg-light">
      <form className="bg-white p-5 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <a href="Home">Home</a>
        <h3 className="text-center mb-4">🔐 Admin Login</h3>

        {/* Username Field */}
        <div className="form-group mb-3">
          <label htmlFor="adminUsername">Username</label>
          <div className="input-group">
            <span className="input-group-text">@</span>
            <input
              type="text"
              className="form-control"
              id="adminUsername"
              placeholder="JohnDoe"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="form-group mb-4">
          <label htmlFor="adminPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="adminPassword"
            placeholder="********"
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </form>

      {/* {page ==='admin-home' && <AdminHome/>} */}
    </div>
  );
}
