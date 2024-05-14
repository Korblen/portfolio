import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className={`container mt-5 bg-${theme === 'light' ? 'light' : 'dark'} text-${theme === 'light' ? 'dark' : 'white'}`}>
      <h2 className="mb-4">Contactez-moi</h2>
      <p>Vous souhaitez discuter avec moi? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
      <form>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Sujet</label>
          <input type="text" className="form-control" id="subject" placeholder="Sujet" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Votre message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Votre message"></textarea>
        </div>
        <button type="button" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
