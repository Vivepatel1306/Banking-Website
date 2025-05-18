
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import About from './components/About';
import Features from "./components/Features";
import Solution from "./components/Solution";
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
function App() {


  return (

    <div className="bg-[#010615] text-white pt-8 ">
      <Router>

        <Header />
        <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Solution" element={<Solution />} />
        </Routes>
    
        <Footer />

      </Router>

    </div>


  )
}

export default App
