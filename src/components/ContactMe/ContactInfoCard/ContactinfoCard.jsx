/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./ContactinfoCard.css"

const ContactinfoCard = ({iconUrl, text}) => {
  return (
    <div className='contact-info-card'>
        <div className='icon'>
            <img src={iconUrl} alt={text} />
        </div>

        <a href={text}><p>{text}</p></a>
    </div>
  );
};

export default ContactinfoCard;