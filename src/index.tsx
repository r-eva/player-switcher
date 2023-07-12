/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axe from '@axe-core/react';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<App />);

serviceWorkerRegistration.register();
