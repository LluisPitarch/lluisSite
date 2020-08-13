import React from 'react';
import Logo from './Logo';

import styled from 'styled-components';
import { Link } from '@reach/router';

const Nav = styled.nav`
  margin-top: 20px;
  width: 100%;
`;

const LinkTo = styled(Link)`
  display: inline-block;
  margin-left: 80px;
  font-size: 18px;
  margin-top: 10px;
  text-decoration: none;
  color: #d9d9d9;
  border-bottom: solid #d9d9d9 transparent 3px;
  &[aria-current] {
    font-weight: 500;
    border-bottom: solid 3px #d9d9d9;
    transition: all 0.2s ease-in-out;
  }
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
        <LinkTo to="/">Home</LinkTo>
        <LinkTo to="/projects">Projects</LinkTo>
        <LinkTo to="/resume">Resume</LinkTo>
        <LinkTo to="/contact">Contact</LinkTo>
      </Anchors>
    </Nav>
  );
};

export default NavBar;
