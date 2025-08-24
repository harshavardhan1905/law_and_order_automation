import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CitizenLogin() {
  const navigate = useNavigate();
  // const [citizens, setCitizens] = useState([]);

  

  const handleLogin = (e) => {
    e.preventDefault();

    const userName = e.target.username.value.trim();
    const password = e.target.password.value.trim();
    const location = e.target.location.value;
    // console.log(userName)
    axios.post('http://127.0.0.1:3001/api/citizen/login', 
      {userName,
      password})
      .then(result =>{
        if(result.data==="success"){
          navigate('/vps', {state: {location}})
        }
        else if(result.data==="password incorrect!"){
          alert("password incorrect!")
        }
        else{
          alert("User not exist!!")
        }
      })
    
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
          <input type="text" name='username' className='form-control' placeholder='Enter username' required />
        </div>

        <div className='form-group mb-3'>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' className='form-control' placeholder='********' required />
        </div>

        <div className='form-group mb-3'>
          <select name="location" className='form-select' required>
            <option value="" disabled defaultValue>Select Location</option>
            <option value="Dundhigal">Dundhigal</option>
            <option value="Gandimaisamma">Gandimaisamma</option>
            <option value="Medchal">Medchal</option>
          </select>
        </div>

        <button type="submit" className='form-control btn btn-primary'>Login</button>

        <div className="mt-3 text-center">
          <span>Don't have an account? </span>
          <Link to="/citizen-signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
