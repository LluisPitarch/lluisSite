import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import image from '../img/dev-img.jpg';

import { github, linkedin } from '../img/icons';
import { useResponsive } from '../hooks/useResponsive';

const Hero = () => {
  const { isBigScreen, isDesktop, isTabletOrPhone } = useResponsive();

  const Section = styled.section`
    display: flex;
    flex-direction: ${isTabletOrPhone ? 'column-reverse' : 'row'};
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${isTabletOrPhone ? '30px 0%' : '100px 0%'};
  `;

  const Article = styled.article`
    width: ${isTabletOrPhone ? '100%' : '46%'};
  `;

  const Image = styled.image`
    width: ${isTabletOrPhone ? '93%' : '46%'};
  `;

  const Title = styled.h1`
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 154%;
    letter-spacing: 1px;
    color: #d9d9d9;
    margin: 0;
  `;

  const SubTitle = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #d9d9d9;
    margin: 30px 0;
  `;

  const IconContainer = styled.div`
    width: 40px;
    display: inline-block;
    margin-right: 10px;
  `;

  return (
    <Section>
      <Article>
        <span>{`<h1>`}</span>
        <Title>
          Hi, I'm <br></br> Lluis Pitarch
        </Title>
        <span>{`</h1>`}</span>
        <SubTitle>{`I’m a front end javascript developer who loves bring ideas to live`}</SubTitle>
        <div>
          <IconContainer>{github}</IconContainer>
          <IconContainer>{linkedin}</IconContainer>
        </div>
      </Article>
      <Image>
        <Card image={image} width="100%" height="45vh" noClick></Card>
      </Image>
    </Section>
  );
};

export default Hero;
