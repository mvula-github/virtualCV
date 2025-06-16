/* eslint-disable no-unused-vars */
import React from "react";
import "./ContactMe.css";
import ContactinfoCard from "./ContactInfoCard/ContactinfoCard";
import ContactForm from "./ContactForm/ContactForm";

// If using a bundler, import images like this:
// import emailIcon from "../assets/email.png";
// import githubIcon from "../assets/github.png";
// import linkedinIcon from "../assets/linkedin.png";

const ContactMe = () => (
  <section className="contact-container" aria-label="Contact section">
    <h2>Contact Me</h2>
    <div className="contact-content">
      <div className="socials-container">
        <ContactinfoCard
          iconUrl="./assets/email.png"
          text="mvulakolweni08@gmail.com"
          link="mailto:mvulakolweni08@gmail.com"
          alt="Email icon"
        />
        <ContactinfoCard
          iconUrl="./assets/github.png"
          text="GitHub"
          link="https://github.com/mvula-github"
          alt="GitHub icon"
        />
        <ContactinfoCard
          iconUrl="./assets/linkedin.png"
          text="LinkedIn"
          link="https://www.linkedin.com/in/mvula"
          alt="LinkedIn icon"
        />
      </div>
      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default ContactMe;
