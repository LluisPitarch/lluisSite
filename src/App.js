import React from 'react';
import { Router } from '@reach/router';

// Page imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Home path="/" />
          <Projects path="/projects" />
          <Resume path="/resume" />
          <Contact path="/contact" />
        </Router>
      </Layout>
    </>
  );
}

export default App;
