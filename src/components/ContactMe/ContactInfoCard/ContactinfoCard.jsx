/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./ContactinfoCard.css";

const ContactinfoCard = ({ iconUrl, text, link, alt }) => (
  <div className="contact-info-card">
    <div className="icon">
      <img src={iconUrl} alt={alt || ""} />
    </div>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ) : (
      <p>{text}</p>
    )}
  </div>
);

export default ContactinfoCard;
