import React from 'react';
import { ReactIcon, Redux, Firebase } from './img/devIcons';

const screenshotHoney1 = require('./img/projects/honey-quiz/screenshot-one-honey-quiz-spa.png');
const screenshotHoney2 = require('./img/projects/honey-quiz/screenshot-two-honey-quiz-spa.png');
const honeyCover = require('./img/projects/honey-quiz/quiz-app-img.png');

export const Projects = [
  {
    path: 'honey-quiz-spa',
    title: 'Honey Quiz Spa',
    img: honeyCover,
    stack: [
      {
        id: 4,
        img: ReactIcon,
      },
      {
        id: 5,
        img: Redux,
      },
      {
        id: 8,
        img: Firebase,
      },
    ],
    tasks: [
      { id: 1, string: 'UI / UX Design' },
      { id: 2, string: 'Developement' },
    ],
    description:
      'This is a serverless SPA builded in React and using Firebase as a database and his Firebase Cloud Functions that allow to easily develop this quiz app.',
    screenshots: [
      { id: 1, src: screenshotHoney1 },
      { id: 2, src: screenshotHoney2 },
    ],
  },
];
