import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { useResponsive } from '../hooks/useResponsive';
import { whiteGitHub, whiteLinkedin } from '../img/icons';

const Footer = () => {
  const { isTabletOrPhone } = useResponsive();

  const FooterDiv = styled.section`
    box-sizing: border-box;
    bottom: 0;
    width: 100%;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-top: solid 3px #d9d9d9;
    border-left: solid 3px #d9d9d9;
    border-right: solid 3px #d9d9d9;
    border-radius: 25px 25px 0 0;
    padding: 30px;
    margin-top: 100px;
  `;

  const ColL = styled.div`
    width: ${isTabletOrPhone ? '100%' : '80%'};
  `;

  const ColR = styled.div`
    width: ${isTabletOrPhone ? '100%' : '20%'};
  `;

  const LinkTo = styled(Link)`
    display: block;
    margin-top: 10px;
    text-decoration: none;
    color: #d9d9d9;
    border-bottom: solid #e58f46 5px;
    line-height: 12px;
    margin-bottom: 15px;
    width: fit-content;
    &:hover {
      border-bottom: solid #e16236 5px;
      transition: all 0.2s ease-in;
    }
  `;

  const UL = styled.ul`
    padding: 0;
  `;

  const Li = styled.li`
    list-style: none;
  `;

  const IconContainer = styled.div`
    width: 20px;
    display: inline-block;
    margin: 20px 10px 0px 0px;
  `;

  return (
    <FooterDiv>
      <ColL className="col-1">
        <p>Feel free to contact, or connect with me on Linkedin</p>
        <span>{`lluispitarchripolles[at]gmail.com`}</span>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lluis-pitarch/"
            rel="noopener">
            <IconContainer>{whiteLinkedin}</IconContainer>
          </a>
          <a
            target="_blank"
            href="https://github.com/LluisPitarch"
            rel="noopener">
            <IconContainer>{whiteGitHub}</IconContainer>
          </a>
        </div>
      </ColL>
      <ColR className="col-2">
        <UL>
          <Li>
            <LinkTo onClick="window.scrollTo(0, 0);" to="/">
              Home
            </LinkTo>
          </Li>
          <Li>
            <LinkTo onClick="window.scrollTo(0, 0);" to="/projects">
              Projects
            </LinkTo>
          </Li>
          <Li>
            <LinkTo onClick="window.scrollTo(0, 0);" to="/resume">
              Resume
            </LinkTo>
          </Li>
          <Li>
            <LinkTo onClick="window.scrollTo(0, 0);" to="/contact">
              Contact
            </LinkTo>
          </Li>
        </UL>
      </ColR>
    </FooterDiv>
  );
};

export default Footer;
