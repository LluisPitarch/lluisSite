import styled from 'styled-components';
import { Link } from '@reach/router';

export const Nav = styled.nav`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: col;
  justify-content: space-between;
`;

export const LinkTo = styled(Link)`
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: #d9d9d9;
  border-bottom: solid #d9d9d9 transparent 3px;
  &[aria-current] {
    font-weight: 500;
    border-bottom: solid 3px #d9d9d9;
    transition: all 0.2s ease-in-out;
  }
`;
