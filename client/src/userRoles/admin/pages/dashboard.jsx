import React from 'react';
import DashboardStats from '../components/dashboardStats';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <DashboardStats />
    </div>
  );
}