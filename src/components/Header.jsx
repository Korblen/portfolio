import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{
      display: 'flex', // Utilise flexbox
      justifyContent: 'space-between', // Répartit l'espace entre les éléments
      alignItems: 'center', // Centre les éléments verticalement
      background: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
      padding: '10px 20px' // Ajoute du padding pour un peu d'espace
    }}>
      <div>
        <h1>M.B</h1>
        <a href="https://github.com/Korblen" target="_blank" rel="noopener noreferrer">
          <img src="/assets/github.svg" alt="GitHub" />
        </a>
      </div>
      <button onClick={toggleTheme} style={{
        padding: '5px 10px', // Donne du padding au bouton pour le rendre plus cliquable
        cursor: 'pointer' // Affiche le curseur en forme de pointeur au survol
      }}>
        {theme === 'light' ? 'Mode nuit' : 'Mode jour'}
      </button>
    </header>
  );
};

export default Header;
