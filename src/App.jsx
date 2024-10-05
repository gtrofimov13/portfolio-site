import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { lightColors, darkColors } from './styles/colors';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if there's a stored preference
    const savedMode = localStorage.getItem('darkMode');
    // Return true if the saved value is 'true', otherwise false
    return savedMode === 'true';
  });

  useEffect(() => {
    const root = document.documentElement;
    const colors = isDarkMode ? darkColors : lightColors;
    
    // Update localStorage when isDarkMode changes
    localStorage.setItem('darkMode', isDarkMode);
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main id="main-content" className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;