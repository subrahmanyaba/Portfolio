// src/pages/ProjectsPage.js

import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
// import CanvasBackground from '../components/CanvasBackground'; // Correct the path if needed
import './Projects.css'; // Ensure this file contains necessary styles
import projectsData from '../static/projects.json';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the JSON file
    setProjects(projectsData);
  }, []);

  return (
    <div className="projects-page">
      {/* <CanvasBackground /> */}
      <div className="content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project,id) => (
            <ProjectCard
              key={id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
