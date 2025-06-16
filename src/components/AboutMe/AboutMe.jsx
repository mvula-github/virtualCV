// eslint-disable-next-line no-unused-vars
import React from "react";
import "./AboutMe.css";
import meImg from "/assets/Me/me3.jpg"; // Adjust path as needed

const AboutMe = () => (
  <section className="about-container" aria-labelledby="about-heading">
    <div className="about-img">
      <img
        className="Me"
        src={meImg}
        alt="Portrait of Mvula Kolweni"
        loading="lazy"
      />
    </div>
    <div className="about-content">
      <h2 id="about-heading">About Me</h2>
      <p>
        As a recent IT graduate and an honours candidate at North-West
        University, I’m excited about using technology to solve real-world
        problems! My journey involves everything from building full-stack
        applications and cryptographic tools to developing practical model
        systems. With a natural curiosity and a passion for continuous learning,
        I dive into areas like cloud security, software engineering, and DevOps.
        I also love helping fellow students grasp complex topics like data
        structures and algorithms, as well as Decision Support Systems, and I
        bring that same clarity and support to the teams I work with. Right now,
        I’m focused on growing in a vibrant environment that values innovation
        and people. Looking ahead, I see myself evolving into a well-rounded IT
        specialist with strong connections both locally and globally.
      </p>
    </div>
  </section>
);

export default AboutMe;
