import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 0 10% 0 10%;
  max-width: 100%;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </Container>
  );
};

export default Layout;
