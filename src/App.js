import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFile, faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link>
            </li>
            <li>
              <Link to="/about"><FontAwesomeIcon icon={faUser} /> About</Link>
            </li>
            <li>
              <Link to="/projects"><FontAwesomeIcon icon={faFile} /> Projects</Link>
            </li>
            <li>
              <Link to="/contact"><FontAwesomeIcon icon={faPhone} />Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
