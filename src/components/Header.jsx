import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">Grigori Trofimov</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </nav>
    </header>
  );
}

export default Header;