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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, molestiae dolor! Saepe vero optio aperiam tenetur odit animi ipsum official
        </p>
        <button className='home-btn'>Get CV</button>
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