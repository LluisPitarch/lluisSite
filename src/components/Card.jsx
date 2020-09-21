import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { useResponsive } from '../hooks/useResponsive';

const Card = ({
  title,
  image,
  height,
  noClick,
  color,
  subtitle,
  fontSize,
  subFontSize,
}) => {
  const { isTabletOrPhone } = useResponsive();

  const hover = (noClick) => {
    if (!noClick) {
      return `
        &:hover{
          color: #E4E4E4;
          transition: all 0.2s;
        }
        &:hover ::after {
          left: 36px;
          top: 36px;
          right: -16px;
          bottom: -16px;
          transition: all 0.2s ease-in-out;
        }`;
    } else {
      return '';
    }
  };

  const heroAfterAnimation = keyframes`
  from {
    top: 30px;
      right: 0px;
      bottom: 0px;
      left: 30px;
  }

  to {
    top: 30px;
      right: -15px;
      bottom: -15px;
      left: 30px;
  }
`;

  const BgColor = (color) => {
    let hexColor = 'E58F46';
    let colorNum = color;

    switch (colorNum) {
      case 2:
        hexColor = '#E16236';
        break;
      case 3:
        hexColor = '#CC7451';
        break;

      default:
        hexColor = '#E58F46';
        break;
    }

    return hexColor;
  };

  const Container = styled.div`
    box-sizing: border-box;
    /* width: 100%; */
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: ${image ? `url(${image})` : BgColor(color)};
    background-size: cover;
    border-radius: 25px;
    margin: 40px 20px 40px 0;
    padding: 20px;
    min-height: 200px;
    height: ${height ? height : 'auto'};
    border: 3px solid #d9d9d9;
    transition: all 0.15s ease-in-out;
    background-position-y: center;

    & ::after {
      z-index: -1;
      content: '';
      position: absolute;
      top: 30px;
      right: -15px;
      bottom: -15px;
      left: 30px;
      margin: -1rem;
      overflow: hidden;
      border: 3px solid #d9d9d9;
      box-sizing: border-box;
      border-radius: 25px;
      transition: all 0.15s ease-in-out;
      animation-name: ${heroAfterAnimation};
      animation-duration: 1.3s;
      animation-delay: 0.1s;
    }

    ${hover(noClick)}
  `;

  const Title = styled.h3`
    font-size: ${fontSize ? fontSize : isTabletOrPhone ? '35px' : '40px'};
    color: #f3f3f3;
  `;

  const Subtitle = styled.span`
    display: block;
    color: #f3f3f3;
    font-size: ${subFontSize ? subFontSize : '20px'};
  `;

  return (
    <Container>
      <Title>{title ? title : ' '}</Title>
      <Subtitle>{subtitle ? subtitle : ''}</Subtitle>
    </Container>
  );
};

export default Card;
