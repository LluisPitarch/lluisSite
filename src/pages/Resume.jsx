import React from 'react';

import Card from '../components/Card';
import Timeline from '../components/Timeline.jsx';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Stack from '../components/Stack';

import PlatziLogo from '../img/platzi-logo.svg';

import {
  HTML5,
  CSS,
  Javascript,
  ReactIcon,
  Redux,
  NodeJs,
  Express,
  Firebase,
  Mongo,
  StyledComponents,
  AdobeIllustrator,
  AdobeXd,
  Figma,
  Webpack,
  JestIcon,
  MySQL,
  GIT,
} from '../img/devIcons';

const Cv = () => {
  return (
    <>
      <Card
        noClick={true}
        width="100%"
        title="Check my resume and feel free to contact me"></Card>

      <Timeline>
        {[
          {
            id: 1,
            string: 'First programing experience',
            align: 'flex-start',
            textAlign: 'left',
            justify: 'flex-start',
          },
          {
            id: 2,
            string: 'Finish my digital marketing studies',
            align: 'flex-end',
            textAlign: 'center',
            justify: 'flex-end',
          },
          {
            id: 3,
            string: 'Taking code seriously',
            align: 'flex-start',
            textAlign: 'center',
            justify: 'flex-start',
          },
          {
            id: 4,
            string: 'Start working in digital world',
            align: 'flex-end',
            textAlign: 'center',
            justify: 'flex-end',
          },
          {
            id: 5,
            string: 'Taking it more seriously',
            align: 'flex-start',
            textAlign: 'center',
            justify: 'flex-start',
          },
          {
            id: 6,
            string: 'Join your company',
            align: 'flex-end',
            textAlign: 'right',
            justify: 'flex-end',
          },
        ]}
      </Timeline>

      <Education>
        {[
          {
            id: 1,
            title: 'First of all, Business Administration Degree (UJI)',
          },
          { id: 2, title: 'After, Postgraduate in Digital Marketing (UPV)' },
          {
            id: 3,
            title:
              'Constantly improving my code skills with the best web development courses',
            img: PlatziLogo,
            href: 'https://platzi.com/@lluis-pitarch-ripolles/',
          },
        ]}
      </Education>

      <Experience>
        {[
          {
            id: 1,
            title: 'Lighting Programmer',
            company: 'ProEvent',
            year: '2014',
          },
          {
            id: 2,
            title: 'Content Marketing',
            company: 'Sincopat',
            year: '2017',
          },
          {
            id: 3,
            title: 'SEO SEM Specialist',
            company: 'Lifting Group',
            year: '2019',
          },
          {
            id: 4,
            title: 'Javascript Developer',
            company: 'Comboi',
            year: '2019',
          },
        ]}
      </Experience>

      <Stack>
        {[
          {
            id: 1,
            img: HTML5,
          },
          {
            id: 2,
            img: CSS,
          },
          {
            id: 3,
            img: Javascript,
          },
          {
            id: 4,
            img: ReactIcon,
          },
          {
            id: 5,
            img: Redux,
          },
          {
            id: 6,
            img: NodeJs,
          },
          {
            id: 7,
            img: Express,
          },
          {
            id: 8,
            img: Firebase,
          },
          {
            id: 9,
            img: Mongo,
          },
          {
            id: 20,
            img: MySQL,
          },
          {
            id: 10,
            img: StyledComponents,
          },
          {
            id: 11,
            img: Webpack,
          },
          {
            id: 11,
            img: JestIcon,
          },
          {
            id: 21,
            img: GIT,
          },
          {
            id: 12,
            img: AdobeIllustrator,
          },
          {
            id: 13,
            img: AdobeXd,
          },
          {
            id: 14,
            img: Figma,
          },
        ]}
      </Stack>
    </>
  );
};

export default Cv;
