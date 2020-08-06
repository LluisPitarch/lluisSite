import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: col;
  justify-content: space-between;
  margin: 100px 0;
`;

const GroupOfCards = ({ children }) => {
  return <Section>{children}</Section>;
};

export default GroupOfCards;
