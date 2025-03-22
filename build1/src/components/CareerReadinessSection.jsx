import React from 'react';
import { useNavigate } from 'react-router-dom';

const CareerReadinessSection = () => {
  const navigate = useNavigate();

    const goToResouces = () => {
        navigate("/ResourceSection");  // Navigates to /about
    };
  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Description */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Get Career Ready
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            SkillSync unifies teaching, counseling, and career readiness to equip students for meaningful and successful careers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Interactive Content */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="https://img.freepik.com/free-vector/mobile-ui-ux-concept-illustration_114360-14906.jpg?t=st=1741948671~exp=1741952271~hmac=afcb6232ac9b164018aa913d9b401157affea9fdf7b8d1c37db990ec2a041f15&w=826"
              alt="Interactive Content"
              className="w-24 h-24 mb-4 rounded-full"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interactive Content</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Students engage with our simulations 2.3 times more than with any other career readiness tool.
            </p>
          </div>

          {/* Automation for Educators */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="https://img.freepik.com/free-vector/data-economy-isometric-composition-with-flowchart-connected-platforms-with-human-characters-computer-folders-blocks-vector-illustration_1284-79926.jpg?t=st=1741948954~exp=1741952554~hmac=f506cfa9a97f2aeef8ee3efe0f472d932a8fa9000c54d1b51aa625918740ee78&w=996"
              alt="Automation for Educators"
              className="w-24 h-24 mb-4 rounded-full"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Automation for Educators</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Create all your academic plans and track student progress with the click of a button.
            </p>
          </div>

          {/* Family Involvement */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="https://img.freepik.com/free-vector/family-protection-concept-illustration_23-2150293959.jpg?t=st=1741949000~exp=1741952600~hmac=eff8ba2822e2c9c809d46aee2adc5acd02d801df4c3a9c6da417b60920ebbf3c&w=826"
              alt="Family Involvement"
              className="w-24 h-24 mb-4 rounded-full"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Family Involvement</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Parents receive progress updates and are encouraged to log-in with their children.
            </p>
          </div>

          {/* Early Insights */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="https://img.freepik.com/free-vector/gradient-insights-illustration_23-2149322241.jpg?t=st=1741949047~exp=1741952647~hmac=cf74a491aea82dea195bff8da524dc60eed488da98a5d7b7fcb9e8466de296f4&w=826"
              alt="Early Insights"
              className="w-24 h-24 mb-4 rounded-full"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Early Insights</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Data and analytics that anticipate problems and identify opportunities.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button onClick={goToResouces} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Explore Career Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerReadinessSection;