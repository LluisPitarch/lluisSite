import React from 'react';
import Title from './Title';
import Card from './Card';

import styled from 'styled-components';

const ExperienceContainer = styled.section`
  margin: 100px 0;
`;

const ExperienceContainerItems = styled.div`
  display: flex;
`;

const Experience = ({ children }) => {
  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      <ExperienceContainerItems>
        {children.map((item) => {
          return (
            <Card
              width="30%"
              height="auto"
              title={item.title}
              subtitle={`- at ${item.company} | ${item.year}`}
            />
          );
        })}
      </ExperienceContainerItems>
    </ExperienceContainer>
  );
};

export default Experience;
