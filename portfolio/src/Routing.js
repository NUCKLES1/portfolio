import React from 'react'
import { Routes,Route } from "react-router-dom"
import App from './App'
import About from './pages/About'

const Routing = () => {
  return (
    <div>
    <Routes>
        <Route />
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
    </Routes>
    </div>
  )
}

export default Routing