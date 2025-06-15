/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./ContactinfoCard.css";

const ContactinfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-info-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>

      <p>{text}</p>
    </div>
  );
};

export default ContactinfoCard;
