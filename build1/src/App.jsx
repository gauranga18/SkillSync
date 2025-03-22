import './App.css'
import Navbar from './components/Navbar'
import CareerReadinessSection from './components/CareerReadinessSection'
import Homepage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProfileSection from './components/ProfileSection'
import ResourceSection from './components/ResourceSection'
import Footer from './components/Footer'
function App() {
  return (
    <>
  <Router>
  <Navbar />
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/ProfileSection" element={<ProfileSection/>}/>
      <Route path="/ResourceSection" element={<ResourceSection/>}/>
      <Route path="/CareerReadinessSection" element={<CareerReadinessSection/>}/>
    </Routes>
    <Footer/>
  </Router>
    </>
  )
} 

export default App
