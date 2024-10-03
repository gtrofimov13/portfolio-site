import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
      </div>
      <div className="nav-buttons">
        <Link to="/projects" className="button">Projects</Link>
        <Link to="/contact" className="button">Contact Me</Link>
      </div>
    </div>
  );
}

export default Home;