import React from 'react';
import { navigationsForSlug } from './utils.mjs';

function Footer({ pageTitle, slug }) {
  const { prev, next } = navigationsForSlug(slug);
  return (
    <div id="footer">
      <p>
        {pageTitle}
      </p>
      <div className="footer-controls">
        <p>
          {prev && <a href={`/${prev.slug}`}>&lt; Previous Slide</a> }
                        &nbsp;&nbsp;&nbsp;
          <a href="/contents">Contents</a>
                        &nbsp;&nbsp;&nbsp;
          {next && <a href={`/${next.slug}`}>Next Slide &gt;</a> }
        </p>
      </div>
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
