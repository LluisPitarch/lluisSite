import React from 'react';
import styled from 'styled-components';
import Title from './Title';

import { useResponsive } from '../hooks/useResponsive';

import HorizontalLine from '../img/timeline-horizontal.svg';
import VerticalLine from '../img/timeline-vertical.svg';

const Timeline = ({ children }) => {
  const { isTabletOrPhone, isSmallDesktop } = useResponsive();

  const TimelineContainer = styled.section`
    margin: 100px 0;
  `;
  const LineContainer = styled.div`
    background: ${isTabletOrPhone
      ? `url(${VerticalLine}) no-repeat`
      : `url(${HorizontalLine}) no-repeat`};
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    height: ${isTabletOrPhone ? '650px' : '230px'};
    margin-top: 30px;
    background-size: contain;
    background-position: center;
    background-position-y: ${isSmallDesktop ? '50px' : '30px'};
  `;

  const StringContainer = styled.div`
    width: ${isTabletOrPhone ? '100%' : '18%'};
    display: ${isTabletOrPhone ? 'flex' : 'block'};
  `;

  const Span = styled.span`
    text-align: center;
    display: block;
    width: ${isTabletOrPhone ? '30%' : ''};
  `;

  return (
    <TimelineContainer>
      <Title>Timeline</Title>

      <LineContainer>
        {children.map((item) => {
          return (
            <StringContainer
              style={
                isTabletOrPhone
                  ? { alignSelf: 'flex-start', justifyContent: item.justify }
                  : { alignSelf: item.align }
              }
              key={item.id}>
              <Span
                style={{
                  textAlign: item.textAlign,
                }}>
                {item.string}
              </Span>
            </StringContainer>
          );
        })}
      </LineContainer>
    </TimelineContainer>
  );
};

export default Timeline;
