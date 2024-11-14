import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

export default function Pricing() {
  const [showTooltip, setShowTooltip] = useState(false);

  const features = [
    {
      name: 'Access to verified investors',
      description: 'Connect with pre-vetted investors actively looking for opportunities in Nigeria'
    },
    {
      name: 'Detailed startup profile',
      description: 'Showcase your startup with rich media, metrics, and growth data'
    },
    {
      name: 'Pitch deck hosting',
      description: 'Securely host and share your pitch deck with interested investors'
    },
    {
      name: 'Investor analytics dashboard',
      description: 'Track investor interest and engagement with your profile'
    },
    {
      name: 'Direct messaging with investors',
      description: 'Communicate directly with interested investors through our platform'
    },
    {
      name: 'Due diligence support',
      description: 'Get assistance preparing and sharing due diligence documents'
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">
            We only succeed when you succeed. No upfront fees, just a simple success fee.
          </p>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 max-w-2xl mx-auto transform transition-all hover:scale-105 duration-300">
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl font-semibold leading-8 text-gray-900">Success-Based Fee</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              We charge a modest 10% success fee only when you successfully secure investment through our platform.
              No hidden charges, no upfront costs.
            </p>
            <div className="mt-6 flex items-baseline gap-x-1">
              <span className="text-5xl font-bold tracking-tight text-gray-900">10%</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">success fee</span>
              <div className="relative ml-2">
                <HelpCircle 
                  className="h-5 w-5 text-gray-400 cursor-help"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                />
                {showTooltip && (
                  <div className="absolute left-full ml-2 w-64 p-2 bg-gray-900 text-white text-sm rounded-md shadow-lg z-10">
                    Fee is only charged when your startup successfully receives funding through our platform
                  </div>
                )}
              </div>
            </div>
            <button className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200">
              Get started today
            </button>
          </div>
          <div className="border-t border-gray-100 px-8 py-6 sm:px-10">
            <p className="text-sm font-semibold leading-6 text-gray-900">What's included:</p>
            <ul role="list" className="mt-4 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600">
              {features.map((feature) => (
                <li key={feature.name} className="flex gap-x-3 group">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  <div>
                    <span className="font-medium text-gray-900">{feature.name}</span>
                    <p className="mt-1 text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-600">
            Looking for custom enterprise solutions? {' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors duration-200">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}