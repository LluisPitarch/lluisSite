import React from 'react';
import Title from './Title';
import { Link } from '@reach/router';
import styled from 'styled-components';

const LinkTo = styled(Link)`
  cursor: pointer;
`;

const Logo = () => {
  return (
    <LinkTo to="/">
      <Title>LluisSite</Title>
    </LinkTo>
  );
};

export default Logo;
