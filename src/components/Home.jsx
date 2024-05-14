import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { theme } = useTheme();

  const projects = [
    { id: 1, title: "Projet 1", description: "Mini texte au choix pour le Projet 1." },
    { id: 2, title: "Projet 2", description: "Mini texte au choix pour le Projet 2." },
    { id: 3, title: "Projet 3", description: "Mini texte au choix pour le Projet 3." }
  ];

  return (
    <div className={`body ${theme}`}>
      <h1>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h1>
      <p>Depuis quelques mois, j'apprends le développement web grâce à The Hacking Projet. J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.</p>
      <div>
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/project/${project.id}`} style={{ color: 'white' }}>Voir plus</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;