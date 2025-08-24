import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHome from './adminHome'
import Home from './Home';
import AdminLogin from './loginPages/adminLogin'
import CitizenLogin from './loginPages/citizenLogin';
import OfficerLogin from './loginPages/officerLogin';
import Vps from './components/vps';
import OfficerVps from './officer_operations/officer_vps'
import CitSignUp from './components/signups/citizenSignup'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/adminhome' element={<AdminHome />}></Route>
          {/* <Route path='/vps' element={<Vps />}></Route> */}


          {/* //login router */}
          <Route path='/admin-login' element={<AdminLogin />}></Route>
          <Route path='/citizen-login' element={<CitizenLogin />}></Route>
          <Route path='/officer-login' element={<OfficerLogin />}></Route>

          {/* //login Vps */}
          {/* <Vps /> */}
          <Route path='/vps' element={<Vps />}></Route>
          <Route path='/officer/vps' element={<OfficerVps/>}></Route>
          <Route path='/citizen-signup' element={<CitSignUp/>}></Route>
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
