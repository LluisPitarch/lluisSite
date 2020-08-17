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

const Home = () => {
  return (
    <>
      <Hero
        title={`Hi, I'm Lluis Pitarch`}
        subtitle="I’m a front end javascript developer who loves bring ideas to live"
        img={image}
        icon1={github}
        srcIconOne="https://github.com/LluisPitarch"
        icon2={linkedin}
        srcIconTwo="https://www.linkedin.com/in/lluis-pitarch/"
      />
      <Title>About Me</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus
        vel, amet, placeat ratione commodi numquam aliquam praesentium illo
        laboriosam impedit soluta dolore itaque dignissimos quibusdam, non
        recusandae ut odio. Corporis quas ab, repellendus placeat debitis autem
        maiores laudantium distinctio ducimus ipsum aperiam voluptates! Fugiat
        iusto quasi enim dolorem asperiores beatae architecto libero nisi illo
        <br></br>
        <br></br>
        Quisquam ullam obcaecati incidunt possimus nesciunt sequi optio rerum
        tenetur dolores dicta saepe non, id vitae praesentium? Reiciendis
        tenetur laudantium, nulla sapiente laboriosam impedit officia pariatur
        omnis quibusdam voluptate nisi placeat nam assumenda? Earum aut dolores
      </p>

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
