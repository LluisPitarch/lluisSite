import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './fonts/FiraCode-Bold.ttf';
import './fonts/FiraCode-Light.ttf';
import './fonts/FiraCode-Regular.ttf';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
