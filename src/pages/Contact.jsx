import React from 'react';
import Title from '../components/Title';

import styled from 'styled-components';

import { github, linkedin } from '../img/icons';

const ContactContainer = styled.div`
  min-height: 54vh;
  margin-top: 10vh;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const IconContainer = styled.div`
  width: 40px;
  display: inline-block;
  margin-right: 10px;
`;

const IconsContainer = styled.div`
  margin: 40px 0;
`;

const H1 = styled.h1`
  font-size: 45px;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <H1>Contact Me</H1>
      <Title>Contact</Title>
      <p>You can contact me easily sending a mail to: </p>
      <Link href="mailto:lluispitarchripolles@gmail.com">{`lluispitarchripolles[at]gmail.com`}</Link>
      <IconsContainer>
        <IconContainer>{github}</IconContainer>
        <IconContainer>{linkedin}</IconContainer>
      </IconsContainer>
    </ContactContainer>
  );
};

export default Contact;
