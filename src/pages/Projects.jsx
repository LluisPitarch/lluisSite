import React from 'react';

import Card from '../components/Card';
import GroupOfCards from '../components/GroupOfCards';

import styled from 'styled-components';

const TitleContainer = styled.div`
  margin-top: 100px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 154%;
  letter-spacing: 1px;
  color: #d9d9d9;
  margin: 0;
`;

const Projects = () => {
  return (
    <>
      <TitleContainer>
        <span>{`<h1>`}</span>
        <Title>There is some of my recent work</Title>
        <span>{`</h1>`}</span>
      </TitleContainer>

      <GroupOfCards>
        <Card width="100" title="Projects" subtitle="- React SPA" color={1} />
        <Card
          width="100"
          title="Resume"
          subtitle="- Instagram Clone"
          color={2}
        />
        <Card
          width="100"
          title="Contact"
          subtitle="- Netflix Clone"
          color={3}
        />
        <Card width="100" title="Resume" subtitle="- React SPA" color={1} />
        <Card
          width="100"
          title="Contact"
          subtitle="- Wordpress site"
          color={2}
        />
      </GroupOfCards>
    </>
  );
};

export default Projects;
