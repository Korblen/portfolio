// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Optionnel: Importer les scripts JS de Bootstrap si nécessaire
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
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
