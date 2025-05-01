import React, { useState } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Mahesh', role: 'Officer', status: ' rape case Handled case (OR) Completed ' },
    { id: 2, name: 'Sita', role: 'Citizen', status:'Case file of murdur (OR) Pending'},
    
  ]);

  const [newUser, setNewUser] = useState({ name: '', role: 'Citizen', status:'' });

  const handleAddUser = () => {
    if (newUser.name.trim() === '') return;
    setUsers([...users, { id: Date.now(), ...newUser }]);
    setNewUser({ name: '', role: 'Citizen',status:'' });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleRoleToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, role: user.role === 'Citizen' ? 'Officer' : 'Citizen' }
          : user
      )
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      {/* Add User */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border border-gray-300 rounded p-2 w-1/3"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="border border-gray-300 rounded p-2 w-1/4"
        >
          <option>Citizen</option>
          <option>Officer</option>
        </select>
        <button
          onClick={handleAddUser}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {/* User List */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Role</th>
            <th className='p-3 border'>Status</th>
            <th className="p-3 border">Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="p-3 border">{user.id}</td>
              <td className="p-3 border">{user.name}</td>
              <td className="p-3 border">{user.role}</td>
              <td className="p-3 border">{user.status}</td>
              <td className="p-3 border space-x-2">
                <button
                  onClick={() => handleRoleToggle(user.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Toggle Role
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
