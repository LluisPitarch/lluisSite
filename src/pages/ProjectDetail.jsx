import React, { useState, useEffect } from 'react';

import Hero from '../components/Hero';
import ProjectStack from '../components/ProjectStack';
import ProjectScreenshots from '../components/ProjectScreenshots';

import { github, externalLink } from '../img/icons';

import { Projects } from '../data/data.js';

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
        icon1={externalLink}
        srcIconOne="https://quiz-honey.netlify.app/"
        icon2={github}
        srcIconTwo="https://github.com/LluisPitarch/honey-quiz"
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
