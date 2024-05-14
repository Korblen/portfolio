import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' ou 'dark'

  // Utiliser useEffect pour écouter les changements de thème
  useEffect(() => {
    // Appliquer la classe de thème au body
    document.body.className = theme;
  }, [theme]); // Le tableau de dépendances s'assure que l'effet s'exécute uniquement quand `theme` change

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
