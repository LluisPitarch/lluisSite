import React from 'react';
import styled from 'styled-components';
import { useResponsive } from '../hooks/useResponsive';

const GroupOfCards = ({ children }) => {
  const { isSmallDesktop, isTabletOrPhone } = useResponsive();

  const Section = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: ${isSmallDesktop
      ? 'repeat(2, 1fr)'
      : isTabletOrPhone
      ? 'repeat(1, 1fr)'
      : 'repeat(3, 1fr)'};
    grid-gap: ${isTabletOrPhone ? '0px' : '40px'};
  `;

  return <Section>{children}</Section>;
};

export default GroupOfCards;
