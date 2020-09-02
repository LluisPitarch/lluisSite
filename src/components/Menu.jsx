import React, { useEffect } from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';

import { useResponsive } from '../hooks/useResponsive';
import { burgerIcon } from '../img/icons';

import { closeIcon } from '../img/icons';

const Menu = () => {
  const { isTabletOrPhone, isSmallDesktop } = useResponsive();
  const LinkTo = styled(Link)`
    display: inline-block;
    margin-left: ${isSmallDesktop ? '27px' : '80px'};
    font-size: 18px;
    margin-top: 10px;
    text-decoration: none;
    color: #d9d9d9;
    border-bottom: solid #d9d9d9 transparent 3px;
    letter-spacing: 1px;
    font-family: 'FiraCode Regular';
    &[aria-current] {
      font-weight: 500;
      border-bottom: solid 3px #d9d9d9;
      transition: all 0.2s ease-in-out;
    }
  `;

  const LinkToRes = styled(Link)`
    display: block;
    margin-left: 80px;
    font-size: 20px;
    margin-top: 50px;
    text-decoration: none;
    color: #d9d9d9;
    border-bottom: solid #d9d9d9 transparent 3px;
    &[aria-current] {
      font-weight: 500;
      border-bottom: solid 2px #d9d9d9;
      transition: all 0.2s ease-in-out;
    }
  `;

  const DesktopMenuContainer = styled.div`
    max-width: 700px;
    float: right;
    margin-top: 20px;
  `;

  const BurgerIcon = styled.span`
    float: right;
    margin-top: 30px;
    width: 25px;
    height: 25px;
  `;

  const CloseIcon = styled.span`
    display: block;
    margin: 30px 0px 0px 30px;
    width: 20px;
    height: 20px;
  `;

  const ResponsiveMenuContainer = styled.div`
    width: 270px;
    position: absolute;
    top: 0px;
    right: -270px;
    background: #333333;
    display: block;
    height: 120vh;
    z-index: 200000;
    transition: all 0.35s ease-in-out;
  `;

  useEffect(() => {
    if (isTabletOrPhone) {
      window.addEventListener('scroll', () => {
        let element = document.getElementById('ResponsiveMenuContainer');
        element.style.right = 'close';
      });
    }
  }, [isTabletOrPhone]);

  const handleClick = (position) => {
    let element = document.getElementById('ResponsiveMenuContainer');
    if (position === 'open') {
      element.style.right = '0px';
    } else {
      element.style.right = '-270px';
    }
  };

  return isTabletOrPhone ? (
    <>
      <BurgerIcon onClick={() => handleClick('open')}>{burgerIcon}</BurgerIcon>
      <ResponsiveMenuContainer id="ResponsiveMenuContainer">
        <CloseIcon onClick={() => handleClick('close')}>{closeIcon}</CloseIcon>
        <LinkToRes onClick={() => handleClick('close')} to="/">
          {' '}
          Home{' '}
        </LinkToRes>
        <LinkToRes onClick={() => handleClick('close')} to="/projects">
          Projects{' '}
        </LinkToRes>
        <LinkToRes onClick={() => handleClick('close')} to="/resume">
          {' '}
          Resume
        </LinkToRes>
        <LinkToRes onClick={() => handleClick('close')} to="/contact">
          {' '}
          Contact
        </LinkToRes>
      </ResponsiveMenuContainer>
    </>
  ) : (
    <>
      <DesktopMenuContainer>
        <LinkTo to="/"> Home </LinkTo>
        <LinkTo to="/projects">Projects </LinkTo>
        <LinkTo to="/resume"> Resume</LinkTo>
        <LinkTo to="/contact"> Contact</LinkTo>
      </DesktopMenuContainer>
      <ResponsiveMenuContainer id="ResponsiveMenuContainer"></ResponsiveMenuContainer>
    </>
  );
};

export default Menu;
