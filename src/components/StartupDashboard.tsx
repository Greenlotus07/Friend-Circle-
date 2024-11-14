// src/components/StartupDashboard.tsx
import React, { useState } from 'react';

const StartupDashboard = ({ onLogout }) => {
  const [updates, setUpdates] = useState('');
  const [fundingProgress, setFundingProgress] = useState(75); // Example progress
  const [investors] = useState([
    { name: 'Michael Adebayo', company: 'Lagos Angels Network' },
    { name: 'Sarah Okonjo', company: 'TechPay Nigeria' },
  ]);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    // Handle update submission logic here
    if (updates) {
      console.log('Update submitted:', updates);
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
        <h2 className="text-xl font-semibold">Profile Overview</h2>
        <div className="border p-4 my-2">
          <h3 className="font-bold">Startup Name: TechPay Nigeria</h3>
          <p>Category: Fintech</p>
          <p>Funding Status: ₦50M</p>
          <p>Description: Revolutionizing digital payments for Nigerian businesses</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Funding Progress</h2>
        <div className="mt-2">
          <div className="flex justify-between text-sm">
            <span>Funding Goal: ₦100M</span>
            <span>{fundingProgress}% Funded</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${fundingProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Interested Investors</h2>
        <ul className="mt-4">
          {investors.map((investor, index) => (
            <li key={index} className="border p-2 my-2">
              <p className="font-bold">{investor.name}</p>
              <p className="text-gray-600">{investor.company}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Submit Update</h2>
        <form onSubmit={handleUpdateSubmit} className="mt-4">
          <textarea
            value={updates}
            onChange={(e) => setUpdates(e.target.value)}
            placeholder="Submit your update..."
            className="border p-2 w-full"
            rows={4}
          />
          <button type="submit" className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">
            Submit Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartupDashboard;
