import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const TimelineContainer = styled.section`
  margin: 100px 0;
`;
const Timeline = () => {
  return (
    <TimelineContainer>
      <Title>Timeline</Title>
    </TimelineContainer>
  );
};

export default Timeline;
