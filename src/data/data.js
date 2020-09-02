import {
  ReactIcon,
  Redux,
  Firebase,
  NodeJs,
  Express,
  Mongo,
  PassportJs,
  HTML5,
  CSS,
  Wordpress,
} from '../img/devIcons';

const screenshotHoney1 = require('../img/projects/honey-quiz/screenshot-one-honey-quiz-spa.png');
const screenshotHoney2 = require('../img/projects/honey-quiz/screenshot-two-honey-quiz-spa.png');
const honeyCover = require('../img/projects/honey-quiz/quiz-app-img.png');

const screenshotAppflix1 = require('../img/projects/appflix/screenshot-appflix-1.jpg');
const screenshotAppflix2 = require('../img/projects/appflix/screenshot-appflix-2.jpg');
const appflixCover = require('../img/projects/appflix/appflix-cover.jpg');

const screenshotArt1 = require('../img/projects/art-portfolio/art-portfolio-screenshot1.png');
const screenshotArt2 = require('../img/projects/art-portfolio/art-portfolio-screenshot2.png');
const artCover = require('../img/projects/art-portfolio/art-portfolio-cover.png');

const screenshotLasDehesas1 = require('../img/projects/las-dehesas/lasdehesasmiel-screenshot-1.png');
const screenshotLasDehesas2 = require('../img/projects/las-dehesas/lasdehesasmiel-screenshot-2.png');
const lasDehesasCover = require('../img/projects/las-dehesas/lasdehesasmiel-cover.png');

export const Projects = [
  {
    path: 'honey-quiz-spa',
    title: 'Honey Quiz Spa',
    img: honeyCover,
    linkIconOne: 'https://quiz-honey.netlify.app/',
    linkIconTwo: 'https://github.com/LluisPitarch/honey-quiz',
    stack: [
      {
        id: 1,
        img: ReactIcon,
      },
      {
        id: 2,
        img: Redux,
      },
      {
        id: 3,
        img: Firebase,
      },
    ],
    tasks: [
      { id: 1, string: 'UI / UX Design' },
      { id: 2, string: 'Developement' },
    ],
    shortDescription:
      'Quiz app to know which type of honey is better for your taste.',
    description:
      'This is a serverless SPA builded in React. Firebase is running as a database and their Cloud Functions allows to easily develop this quiz app.',
    screenshots: [
      { id: 1, src: screenshotHoney1 },
      { id: 2, src: screenshotHoney2 },
    ],
  },
  {
    path: 'appflix',
    title: 'Appflix',
    img: appflixCover,
    linkIconOne: 'https://appflix-app.herokuapp.com/',
    linkIconTwo: 'https://github.com/LluisPitarch/Appflix',
    stack: [
      {
        id: 1,
        img: ReactIcon,
      },
      {
        id: 2,
        img: Redux,
      },
      {
        id: 3,
        img: NodeJs,
      },
      {
        id: 4,
        img: Express,
      },
      {
        id: 5,
        img: Mongo,
      },
      {
        id: 6,
        img: PassportJs,
      },
    ],
    tasks: [
      { id: 1, string: 'UI / UX Design' },
      { id: 2, string: 'API & Backend Development' },
      { id: 2, string: 'Front End Development' },
    ],
    shortDescription:
      'This is a Netflix clone based in a Node.js API & Mongo DB database with a SSR frontend builded in React. Appflix allows you to register, login, see different TV shows and save them to a personal list.',
    description:
      'The backend is builded with node and express, also counts with Passport.js to manage authentication for login and register. The front end uses the cookies browser to store the JWT and stay logged. Furthermore the front end is build with React plus Redux (to manage a global state within the different components, share it and fire different actions)',
    screenshots: [
      { id: 1, src: screenshotAppflix1 },
      { id: 2, src: screenshotAppflix2 },
    ],
  },
  {
    path: 'art-portfolio',
    title: 'Art portfolio',
    img: artCover,
    linkIconOne: 'https://visual-art-portfolio.netlify.app/',
    linkIconTwo: 'https://github.com/LluisPitarch/art-portfolio',
    stack: [
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
        img: ReactIcon,
      },
    ],
    tasks: [
      { id: 1, string: 'UI / UX Design' },
      { id: 2, string: 'Developement' },
    ],
    shortDescription:
      'This is a single page app to show a visual artist portfolio page.',
    description:
      'The page was build in react using the Create React App CLI to speed up the initial config, also i use the Bootstrap-react to use Nav component and slider one.',
    screenshots: [
      { id: 1, src: screenshotArt1 },
      { id: 2, src: screenshotArt2 },
    ],
  },
  {
    path: 'las-dehesas',
    title: 'Las Dehesas Website',
    img: lasDehesasCover,
    linkIconOne: 'https://lasdehesasmiel.com',
    linkIconTwo: 'https://github.com/LluisPitarch/honey-quiz',
    stack: [
      {
        id: 1,
        img: Wordpress,
      },
      {
        id: 2,
        img: HTML5,
      },
      {
        id: 3,
        img: CSS,
      },
    ],
    tasks: [
      { id: 1, string: 'UI / UX Design' },
      { id: 2, string: 'Developement' },
    ],
    shortDescription: 'Wordpress site for a honey e-commerce ',
    description:
      'The project is an functional e-commerce to a honey brand, the site was build with Wordpress and Woocommerce. I made a custom design and theme development based on the needs',
    screenshots: [
      { id: 1, src: screenshotLasDehesas1 },
      { id: 2, src: screenshotLasDehesas2 },
    ],
  },
];
