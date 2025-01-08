/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./WorkCard.css";

const WorkCard = ({ details }) => {
  return (
    <div className="work-xp-card">
      <h6> {details.employer}</h6>
      {/* extracting job title and dislpaying it on work card */}
      <h6 style={{ fontSize: "0.8rem" }}> {details.title}</h6>

      {/* extracting work period and displaying them on work-card */}
      <div className="work-duration"> {details.date}</div>
      {/* extracting duties and displaying them on work-card */}
      <ul>
        {details.duties.map((item) => (
          <li key={item}>
            {item} {/*each duty performed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCard;
