import React from 'react';
import Stack from './Stack';

import styled from 'styled-components';
import { useResponsive } from '../hooks/useResponsive';

const ProjectStack = ({ stack, tasks, description }) => {
  const { isTabletOrPhone, isSmallDesktop } = useResponsive();

  const ProjectStackContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const Col = styled.div`
    width: ${isTabletOrPhone ? '100%' : '48%'};
    height: 100%;
  `;

  const Li = styled.li`
    list-style: none;
  `;

  return (
    <ProjectStackContainer>
      <Col>
        <Stack cols={isSmallDesktop ? 2 : 3}>{stack}</Stack>
      </Col>
      <Col>
        <ul style={{ padding: 0 }}>
          {tasks
            ? tasks.map((item) => <Li key={item.id}>=> {item.string}</Li>)
            : ''}
        </ul>
        <p>{description}</p>
      </Col>
    </ProjectStackContainer>
  );
};

export default ProjectStack;
