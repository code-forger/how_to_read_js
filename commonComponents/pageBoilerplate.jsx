import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';

export const render = (props, Component) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App {...props}>
    {' '}
    <Component />
    {' '}
  </App>);
};
