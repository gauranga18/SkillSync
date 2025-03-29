import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-800 px-4 py-12 border-2 border-white">
      {/* Hero Content */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-white mb-6">
          A Career & College Readiness Platform for ALL Students
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          SkillSync by Paper helps ensure that every student's education leads to a successful career outcome—whether through a 4-year degree or going into the workforce.
        </p>
        <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-105">
          See SkillSync in Action!
        </button>
      </div>

      {/* Image */}
      <div className="mt-12 w-full max-w-4xl">
        <img
          src="https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_1280.jpg"
          alt="SkillSync Platform"
          className="w-full h-auto rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HeroSection;