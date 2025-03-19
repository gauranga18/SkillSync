import './App.css'
import Navbar from './components/Navbar'
import CareerReadinessSection from './components/CareerReadinessSection'
import Homepage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import ProfileSection from './components/ProfileSection'
function App() {
  return (
    <>
  <Navbar />
  <Router>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
  </Router>
  <CareerReadinessSection/>
    </>
  )
} 

export default App
