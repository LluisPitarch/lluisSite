import React, { useState, useEffect } from 'react';

import Hero from '../components/Hero';
import ProjectStack from '../components/ProjectStack';
import ProjectScreenshots from '../components/ProjectScreenshots';

import { github, externalLink } from '../img/icons';

import { Projects } from '../data/data.js';

const ProjectDetail = (props) => {
  const [project, setProject] = useState('');

  const projectNameProps = props.name;
  useEffect(() => {
    const FindProject =
      Projects.find((item) => item.path === projectNameProps) || {};
    setProject(FindProject);
  }, [projectNameProps]);

  return (
    <>
      <Hero
        title={project.title}
        subtitle={project.shortDescription}
        img={project.img}
        icon1={externalLink}
        srcIconOne={project.linkIconOne}
        icon2={github}
        srcIconTwo={project.linkIconTwo}
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
