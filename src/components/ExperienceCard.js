// src/components/ExperienceCard.js

import React from 'react';
import './ExperienceCard.css'; // Import CSS for individual card styling

const ExperienceCard = ({ companyName, duration, job, desc }) => {
  return (
    <div className="experience-card">
      <h3>{job}</h3>
      <p className="company-name">{companyName}</p>
      <p className="duration">{duration}</p>
      <p>{desc}</p>
    </div>
  );
};

export default ExperienceCard;
