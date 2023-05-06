import React from 'react'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import "../pages/pages.css"

const Resume = () => {
  return (
    <div className='container-div'>
        <NavBar />
    <div className="content">
      <div className="texy">
        <div className="flex">
            <img className='my-face' src="face.png" alt="" />
            <div className='move'>
            <h4>Daniel Derin <br /><span>Front-end Developer</span></h4>
            
            </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Resume