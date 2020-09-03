import React from 'react';

import Card from '../components/Card';
import GroupOfCards from '../components/GroupOfCards';

import styled from 'styled-components';
import { Link } from '@reach/router';

const TitleContainer = styled.div`
  margin-top: 100px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 154%;
  letter-spacing: 1px;
  color: #d9d9d9;
  margin: 0;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: #d9d9d9;
`;

const Projects = () => {
  return (
    <>
      <TitleContainer>
        <span>{`<h1>`}</span>
        <Title>There is some of my recent work</Title>
        <span>{`</h1>`}</span>
      </TitleContainer>

      <GroupOfCards>
        <LinkTo onClick="window.scrollTo(0, 0);" to="appflix">
          <Card
            height="300px"
            title="AppFlix"
            subtitle="- Netflix Clone"
            color={3}
          />
        </LinkTo>
        <LinkTo onClick="window.scrollTo(0, 0);" to="honey-quiz-spa">
          <Card
            height="300px"
            title="Honey Quiz SPA"
            subtitle="- React SPA"
            color={1}
          />
        </LinkTo>
        <LinkTo onClick="window.scrollTo(0, 0);" to="art-portfolio">
          <Card
            height="300px"
            title="Art Portfolio"
            subtitle="- React SPA"
            color={1}
          />
        </LinkTo>
        <LinkTo onClick="window.scrollTo(0, 0);" to="las-dehesas">
          <Card
            height="300px"
            title="Las Dehesas"
            subtitle="- Wordpress site"
            color={2}
          />
        </LinkTo>
      </GroupOfCards>
    </>
  );
};

export default Projects;
