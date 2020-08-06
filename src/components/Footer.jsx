import React from 'react';
import { FooterDiv, ColL, ColR, LinkTo, Li } from './styles/Footer';

const Footer = () => {
  return (
    <FooterDiv>
      <ColL className="col-1">
        <p>You can contact easily with me via mail:</p>
        <span>lluispitarchripolles@gmail.com</span>
      </ColL>
      <ColR className="col-2">
        <ul>
          <Li>
            <LinkTo to="/">Home</LinkTo>
          </Li>
          <Li>
            <LinkTo to="/projects">Projects</LinkTo>
          </Li>
          <Li>
            <LinkTo to="/cv">CV</LinkTo>
          </Li>
          <Li>
            <LinkTo to="/contact">Contact</LinkTo>
          </Li>
        </ul>
      </ColR>
    </FooterDiv>
  );
};

export default Footer;
