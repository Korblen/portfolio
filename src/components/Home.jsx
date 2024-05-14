import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import projects from '../data';
import ProjectCard from './ProjectCard';

const Home = () => {
    const { theme } = useTheme();

    return (
        <div className={`body ${theme}`}>
            <h1>Bonjour, je m'appelle Malo Bastianelli. Bienvenue sur mon portfolio !</h1>
            <p>Depuis quelques mois, j'apprends le développement web grâce à The Hacking Projet. J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.</p>
            <div>
                <div className="container mt-4">
                    <div className="row">
                        {projects.map(project => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;