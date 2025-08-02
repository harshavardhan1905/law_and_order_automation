import { Link } from "react-router-dom";


const Sidebar = () => (
  <div className="bg-sky-900 text-white w-64 h-full p-4">
    <h1 className="text-black font-bold mb-1 p-4n text-2xl">
      <Link to="/">Admin Panel</Link>
    </h1>
    <nav className="space-y-4">
      
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i class="bi bi-house-door-fill"></i>
        <Link to="/dashboard" class="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</Link>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <i className="bi bi-projector-fill"></i>
        <Link to="/users" class="text-[15px] ml-4 text-gray-200 font-bold"> Manage Users</Link>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i className="bi bi-image-fill"></i>
        <Link to="/Monitor" class="text-[15px] ml-4 text-gray-200 font-bold"> Case Monitoring</Link>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i className="bi bi-file-arrow-down-fill"></i>
        <Link to="client/src/userRoles/admin/components/dashboardStats.jsx" class="text-[15px] ml-4 text-gray-200 font-bold">Reports</Link>
      </div>
    
      
    </nav>
  </div>
);

export default Sidebar;