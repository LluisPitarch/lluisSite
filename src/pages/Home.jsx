import React from 'react';
import { Link } from '@reach/router';

import Hero from '../components/Hero';
import Title from '../components/Title';
import Card from '../components/Card';
import GroupOfCards from '../components/GroupOfCards';

// To Hero data
import { github, linkedin } from '../img/icons';
import image from '../img/dev-img.jpg';

import cssFile from '../img/format-files/css 1.svg';
import htmlFile from '../img/format-files/html 1.svg';
import javascriptFile from '../img/format-files/javascript 1.svg';
import jsonFile from '../img/format-files/json-file 1.svg';
import jsxFile from '../img/format-files/jsx.svg';

import styled, { keyframes } from 'styled-components';

import { useResponsive } from '../hooks/useResponsive';

function animation(rot) {
  return keyframes`
    from {
      opacity: 0;
      transform: rotate(${rot})
    }
    to {
      opacity: 0.20;
      transform: rotate(0deg)
    }
  `;
}

const LinkTo = styled(Link)`
  text-decoration: none;
  color: #d9d9d9;
`;

const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #d9d9d9;
  margin: 30px 0;
`;

/* -------------------------------------------------------------------------- */
/*                                    HOME                                    */
/* -------------------------------------------------------------------------- */

const Home = () => {
  const { isTabletOrPhone } = useResponsive();

  const CSS = styled.img`
    display: ${isTabletOrPhone ? 'none' : 'block'};
    position: absolute;
    top: 200px;
    left: 140px;
    opacity: 20%;
    z-index: -100;
    animation-name: ${animation('130deg')};
    animation-duration: 0.4s;
    animation-delay: 0.1s;
    animation-timing-function: ease-out;
  `;

  const HTML = styled.img`
    display: ${isTabletOrPhone ? 'none' : 'block'};
    position: absolute;
    top: 500px;
    left: 30px;
    z-index: -100;
    opacity: 20%;
    animation-name: ${animation('-130deg')};
    animation-duration: 0.4s;
    animation-timing-function: ease-out;
    animation-delay: 0.5s;
    animation-fill-mode: both;
  `;

  const JAVASCRIPT = styled.img`
    display: ${isTabletOrPhone ? 'none' : 'block'};
    position: absolute;
    top: 600px;
    left: 810px;
    opacity: 20%;
    z-index: -100;
    animation-name: ${animation('90deg')};
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
    animation-delay: 1s;
    animation-fill-mode: both;
  `;

  const JSON = styled.img`
    display: ${isTabletOrPhone ? 'none' : 'block'};
    position: absolute;
    top: 660px;
    right: 180px;
    opacity: 20%;
    z-index: -100;
    animation-name: ${animation('200deg')};
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
    animation-delay: 1.4s;
    animation-fill-mode: both;
  `;

  const JSX = styled.img`
    display: ${isTabletOrPhone ? 'none' : 'block'};
    position: absolute;
    top: 230px;
    right: 10px;
    opacity: 20%;
    z-index: -100;
    transform: rotate(-30deg);
    animation-name: ${animation('-90deg')};
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-delay: 0.3s;
    animation-fill-mode: both;
  `;

  return (
    <>
      <Hero
        title={`Hi, I'm Lluis Pitarch`}
        subtitle="I’m a javascript developer who loves shape and bring ideas to live"
        img={image}
        icon1={github}
        srcIconOne="https://github.com/LluisPitarch"
        icon2={linkedin}
        srcIconTwo="https://www.linkedin.com/in/lluis-pitarch/"
        typed={true}
      />
      <Title>About Me</Title>
      <P>
        I am formally graduated in Business Administration and Marketing, also I
        would define myself as self-taught in this digital world.
        <br />
        <br />
        Few years ago, I started learning web development to be able to create
        different projects and digital products. Now I am immersed in web
        development field. I feel very comfortable with modern technology
        stacks, specially MERN one based in React.
      </P>

      <CSS src={cssFile} alt="cssFile" />
      <HTML src={htmlFile} alt="cssFile" />
      <JAVASCRIPT src={javascriptFile} alt="cssFile" />
      <JSON src={jsonFile} alt="cssFile" />
      <JSX src={jsxFile} alt="cssFile" />

      <GroupOfCards>
        <LinkTo onClick="window.scrollTo(0, 0);" to="/projects">
          <Card title="Projects" />
        </LinkTo>
        <LinkTo onClick="window.scrollTo(0, 0);" to="/resume">
          <Card title="Resume" />
        </LinkTo>
        <LinkTo onClick="window.scrollTo(0, 0);" to="/contact">
          <Card title="Contact" />
        </LinkTo>
      </GroupOfCards>
    </>
  );
};

export default Home;
