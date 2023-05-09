import React from 'react';
import contentsJson from '../../resources/contents.json';
import './Content.css';
import PropTypes from 'prop-types';
import Body from "./Body";

function Content({age}) {
  return (
      <>
          <pre className="code clamp-to-view">
            { ae === undefined ? <span>Age not specified</span> : <span>{age} years old</span> }
          </pre>
          <Body />
      </>
  );
}

Content.propTypes = {

};

export default Content;
