import React from 'react';
import styled from 'styled-components';

import Card from './Card';

import { useResponsive } from '../hooks/useResponsive';

const Hero = (props) => {
  const { isTabletOrPhone } = useResponsive();

  const Section = styled.section`
    display: flex;
    flex-direction: ${isTabletOrPhone ? 'column-reverse' : 'row'};
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: ${isTabletOrPhone ? '30px 0%' : '100px 0%'};
  `;

  const Article = styled.article`
    width: ${isTabletOrPhone ? '100%' : '46%'};
  `;

  const Image = styled.div`
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
        <Title>{props.title}</Title>
        <span>{`</h1>`}</span>
        <SubTitle>{props.subtitle}</SubTitle>
        <div>
          <a href={props.srcIconOne} rel="noopener noreferrer">
            <IconContainer>{props.icon1}</IconContainer>
          </a>
          <a href={props.srcIconTwo} rel="noopener noreferrer">
            <IconContainer>{props.icon2}</IconContainer>
          </a>
        </div>
      </Article>
      <Image>
        <Card image={props.img} width="100%" height="50vh" noClick></Card>
      </Image>
    </Section>
  );
};

export default Hero;
