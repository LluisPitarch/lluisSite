import styled from 'styled-components';
import { Link } from '@reach/router';

export const FooterDiv = styled.section`
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: solid 3px #d9d9d9;
  border-left: solid 3px #d9d9d9;
  border-right: solid 3px #d9d9d9;
  border-radius: 25px 25px 0 0;
  padding: 30px;
  margin-top: 100px;
`;

export const ColL = styled.div`
  width: 60%;
`;

export const ColR = styled.div`
  width: 40%;
`;

export const LinkTo = styled(Link)`
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: #d9d9d9;
  border-bottom: solid #d9d9d9 transparent 3px;
`;

export const Li = styled.li`
  list-style: none;
`;
