// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <section className="about-container">

    {/* picture block */}
    <div className="about-img">
        <div>
            <img className="Me" src="./assets/Me/me5.jpg" alt="" />
        </div>
    </div>

    {/* The heading or my statement block */}
    <div className='about-content'>
        <h5>About Me</h5>
        <p>
        As I mention before, I am Mvula Kolweni and I am an aspiring IT specialist, currently pursuing a Bachelor of Science degree in Information Technology at North-West University with an interest in system analysis, design, and development. I am proficient in various programming languages but I highly favour C# and Java. I possess a strong foundation in data structures, algorithms, and database management systems principles and more . I am seeking opportunities to expand my skills and learn from experienced or industry professionals.
        </p>
    </div>
   </section>
  )
}

export default AboutMe