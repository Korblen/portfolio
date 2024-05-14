import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  console.log(project); // Vérifie que le projet est trouvé

  return project ? (
    <div>
      <h1>{project.title}</h1>
      <p>Date de sortie: {project.date}</p>
      <p>Description: {project.description}</p>
      <a href={project.link}>Disponible ici</a>
    </div>
  ) : <div>Projet non trouvé</div>; // Ajout d'un cas de fallback
};

export default ProjectDetail;
