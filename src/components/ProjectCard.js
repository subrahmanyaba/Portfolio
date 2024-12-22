// src/components/ProjectCard.js

import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
  let buttonClass = `${projectLink === 'Coming Soon'?'disabled':''}`
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a rel="noreferrer" href = {projectLink} target='_blank'><button className= {`project-button ${buttonClass}`} >{projectLink === 'Coming Soon'? 'Coming soon':'Click here'}</button></a>
      </div>
    </div>
  );
};

export default ProjectCard;
