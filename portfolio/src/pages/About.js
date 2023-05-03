import React from "react";
import Navbar from "../component/NavBar";
import "../pages/pages.css";
import Footer from "../component/Footer";

export const About = () => {
  return (
    <div className="container-div">
      <Navbar />
      <div className="content">
        <div className="about-field">
          <p>About Me</p>
        </div>
        <div className="continue">
          <h1>Empathy-driven Front-end Developer.</h1>
          <img className="developer" src="code.jpg" alt="" />
          <h2>I am a Web Developer currently living in Lagos, Nigeria.</h2>
          <p>As a dedicated product designer with 2 years of experience,
             I bring a unique combination of design expertise and a startup
              mindset. My focus on creating innovative and user-centered designs
               has resulted in successful product launches and satisfied customers.
                I am passionate about the startup culture and eager to join a dynamic
                 and forward-thinking company where I can use my skills to bring bold ideas to
             life and make a lasting impact on the user experience.
             </p>
             <h2>i am developing a new concept of movie streaming app called <span className="bmo">BMO</span></h2>
             <p>Bmo is a streaming app offering varieties of movies for streamers,it provides
               streamers with the best quality and newly released movies,and also offer
                cool features to put you in total control of what is being by your kid. We
                 also promise to deliver new movies despite it's source so you only have
                  to make one payment subscribtion monthly.</p>
                  <img className="movie" src="movies.png" alt="" />
                  <Footer />
        </div>

      </div> 
    </div>
  );
};

export default About;
