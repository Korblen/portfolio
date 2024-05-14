// src/App.jsx

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes'; // Add the missing import statement for AppRoutes

function App() {
  console.log('App component');
  return (
    <ThemeProvider>
      <Header />
    <Router>
      <div className="App">
        <AppRoutes />
        <Contact/>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
