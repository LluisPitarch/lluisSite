import React from 'react';
import Logo from './Logo';

import { LinkTo, Nav } from './styles/NavBar';

const NavBar = () => {
  return (
    <Nav>
      <Logo />
      <LinkTo to="/">Home</LinkTo>
      <LinkTo to="/projects">Projects</LinkTo>
      <LinkTo to="/resume">Resume</LinkTo>
      <LinkTo to="/contact">Contact</LinkTo>
    </Nav>
  );
};

export default NavBar;
