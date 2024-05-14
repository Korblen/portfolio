import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? 'white' : 'darkgray', color: theme === 'light' ? 'black' : 'white' }}>
      <p>Vous souhaitez discuter avec moi? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
      <form>
        <input type="text" placeholder="Sujet" />
        <textarea placeholder="Votre message"></textarea>
        <button type="button">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact ;