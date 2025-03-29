import './App.css';
import Navbar from './components/Navbar';
import CareerReadinessSection from './components/CareerReadinessSection';
import Homepage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileSection from './components/ProfileSection';
import ResourceSection from './components/ResourceSection';
import Footer from './components/Footer'; // Uncomment or remove based on usage
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ProfileSection" element={<ProfileSection />} />
          <Route path="/ResourceSection" element={<ResourceSection />} />
          <Route path="/CareerReadinessSection" element={<CareerReadinessSection />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        {/* Uncomment Footer if you want it visible */}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
