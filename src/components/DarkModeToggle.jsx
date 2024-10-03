import React from 'react';
// No need to import a separate CSS file

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <span className="toggle-slider"></span>
    </label>
  );
}

export default DarkModeToggle;