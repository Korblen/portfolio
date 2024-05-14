import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ title, description, imgUrl, slug}) => {
  const { theme } = useTheme();

  return (
    <div className="col-md-4 mb-4">
      <div className={`card bg-${theme === 'light' ? 'light' : 'secondary'} text-${theme === 'light' ? 'dark' : 'white'}`}>
        <img src={imgUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={`/project/${slug}`} className="btn btn-primary">Voir plus</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;