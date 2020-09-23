import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import { keyframes } from 'styled-components';

import Card from './Card';

import { useResponsive } from '../hooks/useResponsive';

const Hero = (props) => {
  const { isTabletOrPhone, isSuperBigScreen } = useResponsive();

  const fadeIn = keyframes`
  0% {
  opacity: 0;
  }
  100% {
  opacity: 1;
  }
`;

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
    position: relative;
  `;

  const Title = styled.h1`
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 154%;
    letter-spacing: 1px;
    color: #d9d9d9;
    margin: 0;
    min-height: ${isSuperBigScreen ? '0px' : '154px'};
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

  const AnimationCard = styled.div`
    animation-name: ${fadeIn};
    animation-duration: 1.3s;
    width: 100%;
  `;

  return (
    <Section>
      <Article>
        {props.typed ? (
          <Typed strings={[props.title]} typeSpeed={60} showCursor={false}>
            <Title />
          </Typed>
        ) : (
          <Title>{props.title}</Title>
        )}
        <hr style={{ width: '14%', margin: 0 }} />
        {props.who ? <p style={{ letterSpacing: '3px' }}>WHO I AM</p> : ''}
        <SubTitle>{props.subtitle}</SubTitle>
        <div>
          <a href={props.srcIconOne} rel="noopener noreferrer" target="_blank">
            <IconContainer>{props.icon1}</IconContainer>
          </a>
          <a href={props.srcIconTwo} rel="noopener noreferrer" target="_blank">
            <IconContainer>{props.icon2}</IconContainer>
          </a>
        </div>
      </Article>
      <Image>
        <AnimationCard>
          <Card image={props.img} width="100%" height="50vh" noClick></Card>
        </AnimationCard>
      </Image>
    </Section>
  );
};

export default Hero;
