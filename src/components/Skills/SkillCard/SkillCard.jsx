/* eslint-disable no-unused-vars */
import React from "react";
import "./SkillCard.css";

// eslint-disable-next-line react/prop-types
const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick();
    }
  };

  return (
    <div
      className={`skills-card${isActive ? " active" : ""}`}
      onClick={() => onClick()}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      onKeyDown={handleKeyDown}
      aria-label={title}
    >
      <div className="skills-icon">
        <img src={iconUrl} alt={`${title} icon`} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
