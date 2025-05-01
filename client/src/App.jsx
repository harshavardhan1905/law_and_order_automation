// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);

//   const fetchAPI = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/members');
//       console.log(response.data.members);
//       setData(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("API fetch error:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAPI();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : data.members && Array.isArray(data.members) ? (
//         data.members.map((member, i) => <p key={i}>{member}</p>)
//       ) : (
//         <p>No members found.</p>
//       )}
//     </div>
//   );
// }

// export default App;
//================================================above code is Fetching data from the flask

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./userRoles/admin/pages/dashboard";
import Slidebar from "./userRoles/ui/Sidebar";
import ManageUsers from './userRoles/admin/pages/manageUser';
import CaseMonitor from './userRoles/admin/pages/CaseMonitor';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Slidebar/>
       

        <div className="flex-grow bg-gray-50 overflow-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/Monitor" element={<CaseMonitor/>} />
       
          </Routes>
        </div>
      </div>
    </Router>
  );
}
