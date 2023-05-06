import React from 'react'
import { Routes,Route } from "react-router-dom"
import App from './App'
import About from './pages/About'
import Resume from './pages/Resume'

const Routing = () => {
  return (
    <div>
    <Routes>
        <Route />
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
    </Routes>
    </div>
  )
}

export default Routing