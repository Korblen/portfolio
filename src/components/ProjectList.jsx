import React from 'react';
import projects from '../data'; // Vérifie que le chemin est correct

const ProjectList = () => {
  console.log(projects); // Pour voir si les données sont bien chargées
  return (
    <div>
      <h1>Projets</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.title} - {project.date} - {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;