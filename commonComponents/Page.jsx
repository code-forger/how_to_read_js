import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import './reset.css';
import './common.css';
import './utils.css';
import ErrorBoundary from './ErrorBoundary';

function Page({
  children, pageTitle, slug, showHeader = true,
}) {
  return (
    <div id="page">
      { showHeader ? <Header /> : <span /> /* Span to act as header in grid */ }
      <div className="content" id={slug}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </div>
      <Footer pageTitle={pageTitle} slug={slug} />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  slug: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  showHeader: PropTypes.bool.isRequired,
};

export default Page;
