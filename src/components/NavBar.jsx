import React from 'react';
import Logo from './Logo';

import styled from 'styled-components';
import Menu from './Menu';

const Nav = styled.nav`
  width: 100%;
  overflow: auto;
`;

const LogoStyled = styled.div`
  float: left;
  margin-top: 20px;
`;

const NavBar = () => {
  return (
    <Nav>
      <LogoStyled>
        <Logo />
      </LogoStyled>
      <Menu />
    </Nav>
  );
};

export default NavBar;
