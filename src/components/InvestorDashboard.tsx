// src/components/InvestorDashboard.tsx
import React from 'react';

const InvestorDashboard = ({ onLogout }) => {
  const startups = [
    { name: 'TechPay Nigeria', fundingStatus: '₦50M', description: 'Digital payments for businesses' },
    { name: 'FarmConnect', fundingStatus: '₦35M', description: 'Connecting farmers to markets' },
    { name: 'EduTech Plus', fundingStatus: '₦25M', description: 'Quality education for all' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Investor Dashboard</h1>
      <button onClick={onLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Investments Overview</h2>
        <ul className="mt-4">
          {startups.map((startup, index) => (
            <li key={index} className="border p-4 my-2">
              <h3 className="font-bold">{startup.name}</h3>
              <p>{startup.description}</p>
              <p className="text-gray-600">Funding Status: {startup.fundingStatus}</p>
              <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InvestorDashboard;
