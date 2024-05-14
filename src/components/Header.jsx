import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      <h1>Portfolio de John Doe</h1>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
      <button onClick={toggleTheme}>{theme === 'light' ? 'Mode nuit' : 'Mode jour'}</button>
    </header>
  );
};

export default Header;