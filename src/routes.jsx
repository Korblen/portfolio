import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works/Works.jsx';
import Exercises from './components/Works/Exercises.jsx';
import CaseStudy from './components/Works/CaseStudy.jsx';
import ConcretCase from './components/Works/ConcretCase.jsx';


const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />}>
          <Route path="exercises" element={<Exercises />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="concret-case" element={<ConcretCase />} />
        </Route>
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    );
  };
  
  export default AppRoutes;