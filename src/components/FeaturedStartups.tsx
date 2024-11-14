import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

export default function FeaturedStartups() {
  const startups = [
    {
      name: 'TechPay Nigeria',
      category: 'Fintech',
      description: 'Revolutionizing digital payments for Nigerian businesses',
      funding: '₦50M',
      progress: 75,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'FarmConnect',
      category: 'AgriTech',
      description: 'Connecting farmers directly with urban markets',
      funding: '₦35M',
      progress: 60,
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'EduTech Plus',
      category: 'EdTech',
      description: 'Making quality education accessible to all Nigerians',
      funding: '₦25M',
      progress: 45,
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Startups</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover innovative Nigerian startups seeking investment
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {startups.map((startup, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-600">{startup.category}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400" />
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{startup.name}</h3>
                <p className="mt-2 text-gray-600">{startup.description}</p>
                <div className="mt-4">
                  <div className="flex justify-between text-sm">
                    <span>Funding Goal: {startup.funding}</span>
                    <span>{startup.progress}% Funded</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${startup.progress}%` }}
                    ></div>
                  </div>
                </div>
                <button className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow-sm ring-1 ring-indigo-200 hover:ring-indigo-300">
                  View Details
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-500"
          >
            View All Startups
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}