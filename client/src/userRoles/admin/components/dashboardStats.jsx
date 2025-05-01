import React from 'react';

export default function DashboardStats() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="p-6 bg-white shadow rounded-lg text-center">
          <h3 className="text-lg font-medium text-gray-600">Total Registered Users</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">250</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg text-center">
          <h3 className="text-lg font-medium text-gray-600">Active Cases</h3>
          <p className="text-2xl font-bold text-yellow-600 mt-2">38</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg text-center">
          <h3 className="text-lg font-medium text-gray-600">Closed Cases</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">162</p>
        </div>
      </div>

      {/* Bottom Panels */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Recent Activities */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
          <ul className="space-y-3">
            <li className="bg-gray-100 p-3 rounded text-gray-700 shadow">
              Hyd rape case solved by IS Mahesh
            </li>
            <li className="bg-gray-100 p-3 rounded text-gray-700 shadow">
              Robbery case cracked by team B in Warangal
            </li>
            <li className="bg-gray-100 p-3 rounded text-gray-700 shadow">
              Illegal mining case filed in Vizag
            </li>
          </ul>
        </div>

        {/* Case Trends */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Case Trends (Graphs)</h2>
          {/* Placeholder for Graph/Chart */}
          <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            [Graph Component Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
