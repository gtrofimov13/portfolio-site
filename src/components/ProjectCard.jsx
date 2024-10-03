import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tech-list">
        {project.technologies.map((tech, index) => (
          <li key={index} className="tech-item">{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;