import React from 'react';
import styled from 'styled-components';
import Title from './Title';

import HorizontalLine from '../img/timeline-horizontal.svg';

const TimelineContainer = styled.section`
  margin: 100px 0;
`;
const LineContainer = styled.div`
  background: url(${HorizontalLine}) no-repeat;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 170px 0px 0px 0px;
  background-size: contain;
`;

const StringContainer = styled.div`
  width: 18%;
`;

const Span = styled.span`
  text-align: center;
  display: block;
`;

const Timeline = ({ children }) => {
  console.log(children);
  return (
    <TimelineContainer>
      <Title>Timeline</Title>

      <LineContainer>
        {children.map((item) => {
          return (
            <StringContainer key={item.id}>
              <Span>{item.string}</Span>
            </StringContainer>
          );
        })}
      </LineContainer>
    </TimelineContainer>
  );
};

export default Timeline;
