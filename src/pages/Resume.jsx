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
} from '../img/devIcons';

const Cv = () => {
  return (
    <>
      <Card
        width="100%"
        title="Check my resume and feel free to contact with me"></Card>

      <Timeline>
        {[
          { id: 1, string: 'My First programing experience' },
          { id: 2, string: 'Finish my digital marketing studies' },
          { id: 3, string: 'Start working in digital world' },
          { id: 4, string: 'Taking seriously to code' },
          { id: 5, string: 'Join your company' },
        ]}
      </Timeline>

      <Education>
        {[
          { id: 1, title: 'Business Administration Degree (UJI)' },
          { id: 2, title: 'Postgraduate in Digital Marketing (UPV)' },
          {
            id: 3,
            title: '1.165.743 Coding courses in different platforms done',
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
            title: 'Freelance Developer',
            company: 'My Home',
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
        ]}
      </Stack>
    </>
  );
};

export default Cv;
