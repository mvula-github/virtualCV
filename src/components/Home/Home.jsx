/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container" aria-label="Home section">
      {/* The heading or my statement block */}
      <div className="home-content">
        <h1>
          Adventures &#128747; in my Amazing World &#x1F30D; <br /> of
          Technology
        </h1>
        <p>
          Hey there &#128075;, I am Mvula, a recent IT graduate, currently
          pursuing my honours degree. I am a ManCity Fan, and I really aspire to
          be an IT Specialist. So this is my e-Portfolio &#128515;.
        </p>
        <a
          href="./assets/docx/Mvula Kolweni CV.pdf"
          download="mvula_kolweni-CV"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Mvula Kolweni's CV as PDF"
          className="home-btn-link"
        >
          Get CV
        </a>
      </div>

      {/* picture block */}
      <div className="home-img">
        <div>
          <img
            className="Me"
            src="./assets/Me/myself.jpg"
            alt="Portrait of Mvula Kolweni"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
