/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container">
      {/* The heading or my statement block */}
      <div className="home-content">
        <h2>Adventures in my World of Information Technology</h2>
        <p>
          Hey there &#128075;, I am Mvula a recent IT gaduate, currently
          persuing my CompSci honours degree and this is my e-Portfolio
          &#128515;.
        </p>
        <a
          href="./assets/docx/Mvula Kolweni CV.pdf"
          download="mvula_kolweni-CV"
          target="blank"
        >
          <button className="home-btn">Get CV</button>
        </a>
      </div>

      {/* picture block */}
      <div className="home-img">
        <div>
          <img className="Me" src="./assets/Me/me4.jpg" alt="" />
          {/*<h5>photographed by: Jameela Sparks</h5>*/}
        </div>
      </div>
    </section>
  );
};

export default Home;
