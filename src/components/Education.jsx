import React from 'react';
import Title from './Title';

import styled from 'styled-components';

const EducationContainer = styled.section`
  margin: 100px 0;
`;

const ImgContainer = styled.div`
  display: inline-block;
  margin-left: 10px;
  padding-top: 5px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ItemTitle = styled.h3`
  font-size: 20px;
`;

const Education = ({ children }) => {
  return (
    <EducationContainer>
      <Title>Education</Title>
      {children.map((item) => {
        return (
          <ItemContainer key={item.id}>
            <ItemTitle>{`=> ${item.title}`}</ItemTitle>
            <ImgContainer>
              {item.img && (
                <a target="noopener" rel="nofollow" href={item.href}>
                  <img alt={item.img} src={item.img}></img>
                </a>
              )}
            </ImgContainer>
          </ItemContainer>
        );
      })}
    </EducationContainer>
  );
};

export default Education;
