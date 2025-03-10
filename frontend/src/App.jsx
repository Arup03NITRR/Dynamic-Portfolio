import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import Blogs from './pages/Blogs'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default App
