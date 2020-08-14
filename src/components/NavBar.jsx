import React from 'react';
import Logo from './Logo';

import styled from 'styled-components';
import Menu from './Menu';

const Nav = styled.nav`
  margin-top: 20px;
  width: 100%;
`;

const LogoStyled = styled(Logo)`
  float: left;
  margin-top: 100px;
`;

const Anchors = styled.div`
  max-width: 700px;
  float: right;
`;

const NavBar = () => {
  return (
    <Nav>
      <LogoStyled />
      <Anchors>
        <Menu />
      </Anchors>
    </Nav>
  );
};

export default NavBar;
