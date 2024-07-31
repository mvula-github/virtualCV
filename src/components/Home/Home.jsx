/* eslint-disable no-unused-vars */
import React from 'react'
import "./Home.css"

const Home = () => {
  return (
   <section className="home-container">

    {/* The heading or my statement block */}
    <div className='home-content'>
        <h2>My Adventures in the World of Information and Technology</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, molestiae dolor! Saepe vero optio aperiam tenetur odit animi ipsum officia!
        </p>
    </div>

    {/* picture block */}
    <div className="home-img">
        <div>
            <img src="../../../public/assets/Me/me1.jpg" alt="" />
        </div>
    </div>
   </section>
  )
}

export default Home;