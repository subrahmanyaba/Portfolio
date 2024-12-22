// src/pages/ExperiencePage.js

import React from 'react';
import './Experience.css';
import experienceData from '../static/Experience.json';

const ExperienceCard = ({ companyName, duration, job, desc }) => {
  return (
    <div className="experience-card">
      <div className="card-header">
        <h3>{companyName}</h3>
        <p className="duration">{duration}</p>
      </div>
      <div className="card-body">
        <p className="job-title">{job}</p>
        <ul className="description">
          {desc.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <div className="experience-page">
      <h2>My Experience</h2>
      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            companyName={exp.companyName}
            duration={exp.duration}
            job={exp.job}
            desc={exp.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
