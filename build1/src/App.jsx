import './App.css';
import Navbar from './components/Navbar';
import CareerReadinessSection from './components/CareerReadinessSection';
import Homepage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer'; // Uncomment or remove based on usage
import AboutUs from './components/AboutUs';
import CommunitySection from './components/CommunitySection';
import AuthForm from './components/AuthForm';
import ContactUs from './components/ContactUs';
import Settings from './components/Settings';
import SurveyModal from './components/SurveyModal';
import Course from './components/Course'

function App() {                      
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ProfileSection" element={<ProfileSection />} />
          <Route path="/CareerReadinessSection" element={<CareerReadinessSection />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/CommunitySection" element={<CommunitySection />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AuthForm" element={<AuthForm />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/SurveyModal" element={<SurveyModal />} />
          <Route path="/Course" element={<Course />} />
        </Routes>
        {/* Uncomment Footer if you want it visible */}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
