/* eslint-disable no-unused-vars */
import React from 'react';
import "./Home.css";

const Home = () => {
  return (
   <section className="home-container">

    {/* The heading or my statement block */}
    <div className='home-content'>
        <h2>Adventures in the World of Information and Technology</h2>
        <p>
            I am Mvula Kolweni and I am an aspiring IT specialist, currently pursuing a BSc. Information Technology degree at the North-West University with an interest in system analysis, design, and development, so foolow along to know about me.
        </p>
        <a href="./assets/docx/Mvula Kolweni CV.pdf" download="myCV" target="blank"><button className='home-btn'>Get CV</button></a>
    </div>

    {/* picture block */}
    <div className="home-img">
        <div>
            <img className="Me" src="./assets/Me/me4.jpg" alt="" />
            {/*<h5>photographed by: Jameela Sparks</h5>*/}
        </div>
    </div>
   </section>
  )
}

export default Home;