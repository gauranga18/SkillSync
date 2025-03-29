import React from 'react';
import HeroSection from './HeroSection';
import Sidebar from './Sidebar';

const Homepage = () => {
  return (
    <div className="flex animate-fadeIn">
      <Sidebar />
      <div className="flex-1 animate-fadeIn">
        <HeroSection />
      </div>
    </div>
  );
};

export default Homepage;