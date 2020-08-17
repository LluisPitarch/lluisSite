import React, { useState, useEffect } from 'react';

import Hero from '../components/Hero';
import ProjectStack from '../components/ProjectStack';
import ProjectScreenshots from '../components/ProjectScreenshots';

import { github, linkedin } from '../img/icons';

import { Projects } from '../data.js';

const ProjectDetail = (props) => {
  const [project, setProject] = useState('');
  useEffect(() => {
    const FindProject = Projects.find((item) => (item.path = props.name));
    setProject(FindProject);
  }, []);

  return (
    <>
      <Hero
        title={project.title}
        subtitle={project.description}
        img={project.img}
        icon1={linkedin}
        srcIconOne="https://github.com/LluisPitarch"
        icon2={github}
        srcIconTwo="https://www.linkedin.com/in/lluis-pitarch/"
      />
      <ProjectStack
        description={project.description}
        tasks={project.tasks}
        stack={project.stack}
      />
      <ProjectScreenshots screenshots={project.screenshots} />
    </>
  );
};

export default ProjectDetail;
