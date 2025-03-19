import React from 'react';
import HeroSection from './HeroSection';
import Sidebar from './Sidebar';

const Homepage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <HeroSection />
      </div>
    </div>
  );
};

export default Homepage;