import React from 'react';
import Title from './Title';

import styled from 'styled-components';
import { useResponsive } from '../hooks/useResponsive';

const Stack = ({ children }) => {
  const { isTabletOrPhone } = useResponsive();

  const StackContainer = styled.section`
    margin: 100px 0;
  `;

  const StackIconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    grid-auto-rows: minmax(100px, auto);
    margin-top: 60px;
  `;
  const IconContainer = styled.div`
    box-sizing: border-box;
    background: #e5e5e5;
    width: ${isTabletOrPhone ? '85px' : '130px'};
    margin: ${isTabletOrPhone ? '15px' : '20px'};
    border-radius: 15px;
    padding: 15px;
  `;

  return (
    <StackContainer>
      <Title>Stack</Title>
      <StackIconContainer>
        {children.map((item) => {
          return <IconContainer>{item.img}</IconContainer>;
        })}
      </StackIconContainer>
    </StackContainer>
  );
};

export default Stack;
