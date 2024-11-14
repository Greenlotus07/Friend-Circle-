// src/components/InvestorDashboard.tsx
import React, { useState } from 'react';

const InvestorDashboard = ({ onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [startups] = useState([
    { name: 'TechPay Nigeria', fundingStatus: '₦50M', description: 'Digital payments for businesses', roi: '20%' },
    { name: 'FarmConnect', fundingStatus: '₦35M', description: 'Connecting farmers to markets', roi: '15%' },
    { name: 'EduTech Plus', fundingStatus: '₦25M', description: 'Quality education for all', roi: '10%' },
  ]);

  const filteredStartups = startups.filter(startup =>
    startup.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (startup) => {
    setSelectedStartup(startup);
  };

  const handleCloseDetails = () => {
    setSelectedStartup(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Investor Dashboard</h1>
      <button onClick={onLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search startups..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Investments Overview</h2>
        <ul className="mt-4">
          {filteredStartups.map((startup, index) => (
            <li key={index} className="border p-4 my-2">
              <h3 className="font-bold">{startup.name}</h3>
              <p>{startup.description}</p>
              <p className="text-gray-600">Funding Status: {startup.fundingStatus}</p>
              <p className="text-gray-600">ROI: {startup.roi}</p>
              <button
                className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded"
                onClick={() => handleViewDetails(startup)}
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedStartup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{selectedStartup.name}</h3>
            <p>{selectedStartup.description}</p>
            <p className="text-gray-600">Funding Status: {selectedStartup.fundingStatus}</p>
            <p className="text-gray-600">ROI: {selectedStartup.roi}</p>
            <button onClick={handleCloseDetails} className="mt-4 bg-gray-300 px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorDashboard;
