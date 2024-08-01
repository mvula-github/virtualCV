/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./WorkCard.css";


const WorkCard = ({ details }) => {
  return (
    <div className='work-xp-card'>
        <h6> {details.title}</h6>

        <div className='work-duration'> {details.date}</div>
        <ul>
            {details.responsibilities.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>

    </div>
  )
}

export default WorkCard;