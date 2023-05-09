import React from 'react';
import Page from '../../commonComponents/Page';
import './Content.css';

function Content() {
  return (
    <Page pageTitle="Home" slug="" showHeader={false}>
      <div id="home" className="flex-column">
        <div className="margin-auto">
          <h1>How to read JavaScript</h1>
          <p>- Michael Rochester</p>
        </div>
      </div>
    </Page>
  );
}

Content.propTypes = {

};

export default Content;
