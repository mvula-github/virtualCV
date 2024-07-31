/* eslint-disable no-unused-vars */
import React from 'react';
import "./SkillsInfoCard.css";

// eslint-disable-next-line react/prop-types
const SkillsInfoCard = ({heading,skills}) => {
  return (
    <div className='skills-info-card'>
    <h6>{heading}</h6>
    </div>
  )
}

export default SkillsInfoCard;