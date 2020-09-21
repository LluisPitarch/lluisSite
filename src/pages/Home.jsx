import React from 'react';
import { Link } from '@reach/router';

import Hero from '../components/Hero';
import Title from '../components/Title';
import Card from '../components/Card';
import GroupOfCards from '../components/GroupOfCards';

// To Hero data
import { github, linkedin } from '../img/icons';
import image from '../img/dev-img.jpg';

import styled from 'styled-components';

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

const Home = () => {
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
