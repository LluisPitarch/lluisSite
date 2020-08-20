import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'FiraCode Bold';
  padding: 5px 10px;
  border: 3px solid #d9d9d9;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  background: none;
  color: #d9d9d9;
  outline: none;
`;

const Title = ({ children }) => {
  return (
    <>
      <Button>{`<${children} />`}</Button>
    </>
  );
};

export default Title;
