/* eslint-disable no-unused-vars */
import React from "react";
import "./ContactMe.css";
import ContactinfoCard from "./ContactInfoCard/ContactinfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div className="socials-container">
          <a href="mvulakolwen08@gmail.com" target="blank">
            <ContactinfoCard
              iconUrl="./assets/email.png"
              text="Email: mvulakolwen08@gmail.com"
            />
          </a>
          <a href="https://github.com/mvula-github" target="blank">
            <ContactinfoCard iconUrl="./assets/github.png" text="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/mvula" target="blank">
            <ContactinfoCard iconUrl="./assets/linkedin.png" text="LinkedIn" />
          </a>
        </div>

        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
