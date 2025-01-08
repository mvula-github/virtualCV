// eslint-disable-next-line no-unused-vars
import React from "react";
import "./AboutMe.css";

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
      <div className="about-content">
        <h5>About Me</h5>
        <p>
          I’m a recent graduate from North-West University with a Bachelor’s
          degree in Information Technology, currently pursuing an Honours in
          Computer Science & Information Technology. I’m highly motivated and
          passionate about problem-solving, with a strong foundation in IT
          principles. I’m eager to take on a challenging entry-level role in a
          dynamic and innovative tech environment where I can contribute to
          meaningful projects and grow professionally. My skills include
          object-oriented programming, database management systems, and a
          variety of technical tools, which I’ve applied successfully in
          academic projects and as a part-time Student Assistant. I thrive both
          independently and in team settings, and I’m always ready to adapt,
          learn new technologies, and bring value to a forward-thinking
          organization.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
