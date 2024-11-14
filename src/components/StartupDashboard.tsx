// src/components/StartupDashboard.tsx
import React, { useState } from 'react';

const StartupDashboard = ({ onLogout }) => {
  const [updates, setUpdates] = useState('');
  const [fundingRequests, setFundingRequests] = useState([]);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (updates) {
      setFundingRequests([...fundingRequests, updates]);
      setUpdates('');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Startup Dashboard</h1>
      <button onClick={onLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Funding Requests</h2>
        <form onSubmit={handleUpdateSubmit} className="mt-4">
          <textarea
            value={updates}
            onChange={(e) => setUpdates(e.target.value)}
            placeholder="Submit your funding request..."
            className="border p-2 w-full"
            rows={4}
          />
          <button type="submit" className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">
            Submit Request
          </button>
        </form>

        <ul className="mt-4">
          {fundingRequests.map((request, index) => (
            <li key={index} className="border p-2 my-2">{request}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StartupDashboard;
