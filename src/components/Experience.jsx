import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

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
  const { isBigScreen, isDesktop } = useResponsive();

  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      <ExperienceContainerItems>
        <GroupOfCards col={isBigScreen ? 4 : isDesktop ? 3 : 1}>
          {children.map((item) => (
            <Card
              fontSize="27px"
              subFontSize="16px"
              noClick={true}
              width="100"
              title={item.title}
              subtitle={`- at ${item.company} | ${item.year}`}
            />
          ))}
        </GroupOfCards>
      </ExperienceContainerItems>
    </ExperienceContainer>
  );
};

export default Experience;
