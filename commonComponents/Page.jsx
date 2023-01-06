import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './reset.css';
import './common.css';
import './utils.css';
import ErrorBoundary from "./ErrorBoundary";

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

};

export default Page;
