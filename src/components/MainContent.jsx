import React from 'react';
import { useTheme } from '../context/ThemeContext';

const MainContent = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? 'white' : '#333', color: theme === 'light' ? 'black' : 'white' }}>
      <h2>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h2>
      <p>Depuis quelques mois, j'apprends le développement web grâce à The Hacking Projet. J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.</p>
      {/* Ajoute ici des détails sur les projets */}
    </div>
  );
};

export default MainContent;