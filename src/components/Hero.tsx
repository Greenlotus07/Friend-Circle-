import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-16">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-24 sm:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Connecting Startups with Investors in Nigeria
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your Gateway to Funding & Investment Opportunities. Join a thriving community of innovators and investors shaping Nigeria's future.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 flex items-center gap-2">
              Pitch Your Startup <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 flex items-center gap-2">
              Join as Investor <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Nigerian tech startup team collaborating"
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}