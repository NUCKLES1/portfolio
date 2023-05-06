import "./App.css";
import { NavBar } from "./component/NavBar";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <div className="first-box">
          <div className="text-holder">
            <h2>Hi i'am</h2>
            <span>Nuckles Daan</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus quisquam, animi distinctio numquam quidem.
            </p>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
             <Link to="/Resume"><button className="first-button">Resume</button></Link>
            <button className="second-button">Reach Out</button>
          </div>
          <div className="log">
            <img src="face.png" className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="projects">
          <h2>Featured Works</h2>
          <div className="flexbar">
            <div className="holder">
              <p>Algocrib</p>
              <span>Software Solution Website</span>
              <Link to="https://www.algocrib.com/">
                <img className="project-image" src="algocrib.png" alt="" />
              </Link>
            </div>
            <div className="holder">
              <div>
            <p>Fooduu</p>
              <span>Food website</span>
              </div>
              <img className="project-image" src="fooduu.png" alt="" />
            </div>
          </div>
          <div className="flexbar">
            <div className="holder">
              <p>Cheqq</p>
              <span>Cheqq coming soon screen</span>
              <img className="project-image" src="cheqq.png" alt="" />
            </div>
            <div className="holder">
              <p>Algocrib</p>
              <span>Software Solution Website</span>
              <img className="project-image" src="algocrib.png" alt="" />
            </div>
          </div>
          <div className="second-box">
            <h2>Other Projects</h2>
            <div className="slider">
              <div className="card">
                <p>Algocrib</p>
                <p>Software Solution Website</p>
                <img className="works" src="salad2.jpg" alt="" />
              </div>
              <div className="card">
                <p>Algocrib</p>
                <p>Software Solution Website</p>
                <img className="works" src="salad2.jpg" alt="" />
              </div>
              <div className="card">
                <p>Algocrib</p>
                <p>Software Solution Website</p>
                <img className="works" src="salad2.jpg" alt="" />
              </div>
              <div className="card">
                <p>Algocrib</p>
                <p>Software Solution Website</p>
                <img className="works" src="salad2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
