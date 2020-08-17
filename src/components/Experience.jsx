import React from 'react';
import Title from './Title';
import Card from './Card';

import styled from 'styled-components';
import GroupOfCards from './GroupOfCards';

const ExperienceContainer = styled.section`
  margin: 100px 0;
`;

const ExperienceContainerItems = styled.div`
  display: flex;
  width: 100%;
`;

const Experience = ({ children }) => {
  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      <ExperienceContainerItems>
        <GroupOfCards>
          {children.map((item) => {
            return (
              <Card
                key={item.id}
                noClick={true}
                width="100"
                title={item.title}
                subtitle={`- at ${item.company} | ${item.year}`}
              />
            );
          })}
        </GroupOfCards>
      </ExperienceContainerItems>
    </ExperienceContainer>
  );
};

export default Experience;
