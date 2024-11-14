import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturedStartups from './components/FeaturedStartups';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import StartupDashboard from './components/StartupDashboard';
import InvestorDashboard from './components/InvestorDashboard';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userType, setUserType] = useState<'startup' | 'investor' | null>(null);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (userType === 'startup') {
    return <StartupDashboard onLogout={() => setUserType(null)} />;
  }

  if (userType === 'investor') {
    return <InvestorDashboard onLogout={() => setUserType(null)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onUserTypeSelect={setUserType} />
      <Hero onUserTypeSelect={setUserType} />
      <HowItWorks />
      <FeaturedStartups />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;