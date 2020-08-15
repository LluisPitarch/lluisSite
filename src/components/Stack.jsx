import React from 'react';
import Title from './Title';

import styled from 'styled-components';

const StackContainer = styled.section`
  margin: 100px 0;
`;

const StackIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-auto-rows: minmax(100px, auto);
  margin-top: 60px;
`;
const IconContainer = styled.div`
  box-sizing: border-box;
  background: #e5e5e5;
  width: 130px;
  margin: 20px;
  border-radius: 15px;
  padding: 15px;
`;

const Stack = ({ children }) => {
  return (
    <StackContainer>
      <Title>Stack</Title>
      <StackIconContainer>
        {children.map((item) => {
          return <IconContainer>{item.img}</IconContainer>;
        })}
      </StackIconContainer>
    </StackContainer>
  );
};

export default Stack;
