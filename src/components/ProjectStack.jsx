import React from 'react';
import StackIcons from './StackIcons';
import Title from './Title';

import styled from 'styled-components';
import { useResponsive } from '../hooks/useResponsive';

const ProjectStack = ({ stack, tasks, description }) => {
  const { isTabletOrPhone, isSmallDesktop } = useResponsive();

  const ProjectStackContainer = styled.section``;

  const Col = styled.div`
    width: ${isTabletOrPhone ? '100%' : '48%'};
  `;

  const ColContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <ProjectStackContainer>
      <div style={{ width: '100%' }}>
        <Title>Stack</Title>
      </div>
      <ColContainer>
        <Col>
          <StackIcons cols={isSmallDesktop ? 2 : 3}>{stack}</StackIcons>
        </Col>
        <Col>
          <ul style={{ padding: 0 }}>
            {tasks
              ? tasks.map((item) => (
                  <h3 key={item.id}>{`=> ${item.string}`}</h3>
                ))
              : ''}
          </ul>
          <p>{description}</p>
        </Col>
      </ColContainer>
    </ProjectStackContainer>
  );
};

export default ProjectStack;
