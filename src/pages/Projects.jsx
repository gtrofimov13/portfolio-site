import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team functionality.",
      technologies: ["Vue.js", "Firebase", "Vuex"]
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A mobile-friendly weather application that provides accurate forecasts using geolocation.",
      technologies: ["React Native", "OpenWeatherMap API", "Geolocation API"]
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;