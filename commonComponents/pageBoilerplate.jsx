/* eslint-disable react/jsx-closing-tag-location,react/jsx-props-no-spreading */
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

export const render = (props, Component) => {
  // eslint-disable-next-line no-undef
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App {...props}>
    {' '}
    <Component />
    {' '}
  </App>);
};
