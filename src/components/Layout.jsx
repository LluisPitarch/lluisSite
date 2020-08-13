import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import styled from 'styled-components';
import { useResponsive } from '../hooks/useResponsive';

const Layout = ({ children }) => {
  const { isBigScreen, isPhone, isTablet } = useResponsive();

  const margin = isBigScreen ? '15%' : isTablet ? '10%' : '4%';

  const Container = styled.div`
    position: relative;
    padding: 0 ${margin};
    max-width: 100%;
    min-height: 100vh;
  `;

  const ContentContainer = styled.div`
    width: 100%;
  `;

  return (
    <Container>
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </Container>
  );
};

export default Layout;