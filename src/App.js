import React from 'react';
import { Router } from '@reach/router';

// Page imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <>
      <Layout>
        <Router primary={false}>
          <Home path="/" />
          <Projects path="/projects" />
          <ProjectDetail path="/projects/:name" />
          <Resume path="/resume" />
          <Contact path="/contact" />
        </Router>
      </Layout>
    </>
  );
}

export default App;
