import React from 'react';
import { Rocket, LineChart, Users, PlayCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'For Startups',
      description: 'Create your profile, submit a compelling pitch, and connect with potential investors.',
      icon: Rocket,
      color: 'text-blue-500',
    },
    {
      title: 'For Investors',
      description: 'Browse vetted startups, analyze opportunities, and make informed investment decisions.',
      icon: LineChart,
      color: 'text-green-500',
    },
    {
      title: 'Community',
      description: 'Join a vibrant ecosystem of entrepreneurs, mentors, and industry experts.',
      icon: Users,
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple steps to connect startups with the right investors
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-lg ${step.color} bg-opacity-10`}>
                  <step.icon className={`h-6 w-6 ${step.color}`} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-sm ring-1 ring-indigo-200 hover:ring-indigo-300">
              <PlayCircle className="h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}