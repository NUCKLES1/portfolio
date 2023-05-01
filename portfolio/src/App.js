import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./component/NavBar";
import Footer from "./component/Footer";

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
            <button className="first-button">Resume</button>
            <button className="second-button">Reach Out</button>
          </div>
          <div className="log">
          <img src="me.jpg" className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="projects">
          <h2>Featured Works</h2>
          <div className="flexbar">
            <div className="holder">
              <p>Algocrib</p>
              <p>Software Solution Website</p>
              <img className="project-image" src="algocrib.png" alt="" />
            </div>
            <div className="holder">
              <p>Fooduu</p>
              <p>Food Website</p>
              <img className="project-image" src="fooduu.png" alt="" />
            </div>
          </div>
          <div className="flexbar">
            <div className="holder">
              <p>Cheqq</p>
              <p>Cheqq coming soon screen</p>
              <img className="project-image" src="cheqq.png" alt="" />
            </div>
            <div className="holder">
              <p>Algocrib</p>
              <p>Software Solution Website</p>
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
          <div className="border"></div>
          <div className="lastbox">
            <h1>Reach Out!</h1>
            <div className="layout">
              <div className="linklayout">
                <button className="link1">
                  <h2>danyxcharge@gmail.com</h2>
                  <h3>E-mail</h3>
                </button>
                <button className="link1">
                  <h2>Nuckles Daan</h2>
                  <h3>Linkedin</h3>
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        </div>
    </div>
  );
}

export default App;
