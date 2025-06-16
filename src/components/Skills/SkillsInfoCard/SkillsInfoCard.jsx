/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./SkillsInfoCard.css";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h2 className="skills-info-heading">{heading}</h2>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={item.skill || `skill_${index}`}>
            <div className="skill-info">
              <p>{item.skill}</p>
              <p className="percentage">{item.percentage}</p>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: item.percentage }}
                role="progressbar"
                aria-valuenow={parseInt(item.percentage)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${item.skill} proficiency`}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
