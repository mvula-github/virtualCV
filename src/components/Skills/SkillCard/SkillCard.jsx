/* eslint-disable no-unused-vars */
import React from 'react'
import "./SkillCard.css"

// eslint-disable-next-line react/prop-types
const SkillCard = ({title, iconUrl, isActive, onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "active" :""} `}>
        <div className='skills-icon'>
            <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>

    </div>
  )
}

export default SkillCard