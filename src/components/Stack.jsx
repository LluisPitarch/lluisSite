import React from 'react';
import Title from './Title';

import styled from 'styled-components';
import { useResponsive } from '../hooks/useResponsive';

const Stack = ({ children, cols }) => {
  const { isSmallDesktop, isTablet, isPhone } = useResponsive();

  const StackContainer = styled.section``;

  const StackIconContainer = styled.div`
    display: grid;
    grid-template-columns: ${cols
      ? `repeat(${cols}, 1fr)`
      : isSmallDesktop
      ? 'repeat(5, 1fr)'
      : isTablet
      ? 'repeat(4, 1fr)'
      : isPhone
      ? 'repeat(3, 1fr)'
      : 'repeat(7, 1fr)'};
    grid-gap: 20px;
    margin-top: 60px;
  `;
  const IconContainer = styled.div`
    box-sizing: border-box;
    background: #e5e5e5;
    width: 100%;
    margin: 0px;
    border-radius: 15px;
    padding: 15px;
  `;

  return children ? (
    <StackContainer>
      <Title>Stack</Title>
      <StackIconContainer>
        {children.map((item) => {
          return <IconContainer key={item.id}>{item.img}</IconContainer>;
        })}
      </StackIconContainer>
    </StackContainer>
  ) : (
    ''
  );
};

export default Stack;
