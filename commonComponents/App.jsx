import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Page from './Page';

function App({ title, slug, children }) {
  return (
    <Page pageTitle={title} slug={slug}>
      {children}
    </Page>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default App;
