import './App.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import AdminLogin from './loginPgaes/adminLogin';

function Home() {
  //useState for navigating specified logins
  const [page, setPage] = useState('home')
  const Navigate = useNavigate();
  // console.log(page)
  return (
    <div>
      <div className="container-fluid bg-light border-bottom position-fixed top-0 start-0 z-3 px-4 py-2" style={{ width: '100%' }}>
        <div className="d-flex justify-content-between align-items-center w-100">
          <h2 className="m-0">
            Law and Order Automation..!
          </h2>

          <div className="btns d-flex gap-2">
            {/* <BrowserRouter>
            <Routes>
              <Route to='/adminlogin' element={<AdminLogin />}></Route>
            </Routes>
            </BrowserRouter> */}
            <button className="btn btn-outline-primary" onClick={()=>setPage('admin-login')}>Admin Login</button>
            <button className="btn btn-outline-success" onClick={()=> setPage('citizen-login')}>Citizen Login</button>
            <button className="btn btn-outline-danger" onClick={()=>setPage('officer-login')}>Officer Login</button>
          </div>
        </div>

        {/* Login Component below */}
        {page ==='admin-login' && (
          Navigate('/admin-login')
        )}
        {page === 'citizen-login' && (
          Navigate('citizen-login')
        )}
        {page ==='officer-login' && (
          Navigate('/officer-login')
        )}


        
      </div>

    </div>
  )
}

export default Home;